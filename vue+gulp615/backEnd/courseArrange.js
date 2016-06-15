(function(export){
'use strict';


	// export.courseArrange = new Vue({
	// 	el: ".more",
	// 	data:{

	// 	},
	// 	computed:{
	// 		courseList: function(){
	// 			return [{courseId:1,courseName:'222',grade:'1',class:'1',teacher:'小红'},{courseId:1,courseName:'222',grade:'1',class:'1',teacher:'小红'}];//
	// 		}
	// 	},
	// 	methods:{
	// 		arrange: function(courses,classrooms){

	// 		}
	// 	}
	// })

    function CourseArrange(classes) {
    	this.classes = classes;//arrangeTeacher
    	this.teachers = teachers;//arrangeTeacher
    	this.rooms = rooms;//arrangeCourse

	}

	//根据班级Id查询待排课班级的班级信息和课程列表
	courseArrange.prototype.selectedCourse = function(classId) {
		var classes = this.classes;
		var selectClass = "";
		for(var m = 0;m<classes.length;m++){
			if(classes[m].classId == classId){
				selectClass = classes[m];
				this.classes.splice(m, 1); //暂时先删除要排课的班级信息，修改之后再加回来
				break;
			}
		}
		return selectClass;
	};

	//对待排课班级对应的课程列表按权值由大到小排序
	courseArrange.prototype.sortedCourse = function(unSortCourse) {
		unSortCourse.sort(function(a,b){
			return a.courseType > b.courseType?-1:1;
		});
	}

	//对老师根据剩余工作量和空余时间数由大到小排序
	courseArrange.prototype.sortedTeacher = function(unSortTeacher) {
		unSortTeacher.sort(function(a,b){
			if(a.residualWorkload > b.residualWorkload){
				return -1;
			} else if(a.residualWorkload === a.residualWorkload){
				return a.idleTime.length > b.idleTime.length ? -1:1;
			} else if(a.residualWorkload < b.residualWorkload){
				return 1;
			}
		});
	}

	//先给每个班要安排的课程安排对应的老师，再根据老师的时间匹配教室
	courseArrange.prototype.arrangeTeacher = function(classId) {
		var arrangeCourse = this.selectedCourse(classId);//将arrangCourse再push进this.classes
		var tmpCourse = arrangeCourse.courses;//返回待排课程的数组
		//修改完别忘了加回数组
		//先对课程根据权值排序
		tmpCourse = this.sortedCourse(tmpCourse);
		//有些课程可以事先确定老师或者教室，在开始排课之前设置好
		var failCourses = new Array();//排课失败的课程
		for (var i=0;i<tmpCourse.length;i++){
			//如果未安排老师和教室，开始排课
			if(tmpCourse[i].teacherId =="" && tmpCourse[i].classroomId==""){
				var courseId = tmpCourse[i].courseId;
				var teachers_arr = this.teachers;//获取所有的教师信息
				//查找所有可以教这门课程的老师信息（如果老师所有时间都有空，是否还要挨个时间段输入？）
				teachers_arr.filter(function(element,pos){
					if(element.residualWorkload==0){//如果老师剩余工作量为0，不能排这个老师
						return false;
					}
					var teachCourse_arr = element.courseId;
					for(var ia=0;ia<teachCourse_arr.length;ia++){
						if(teachCourse_arr[ia] == courseId){//如果老师能教的课包括这门课，返回true
							return true;
						}
					}
					return false;
				})
				//对老师根据剩余工作量和空余时间数排序
				teachers_arr = this.sortedTeacher(teachers_arr);

				var flag_teacher = 0;
				for(var ib=0;ib<teachers_arr;ib++){
					var tmpTeacher = teachers_arr[ib].idleTime;//储存该老师的空余时间段数组
					var spareTime = arrangeCourse.spareTime;
					var classSize = arrangeCourse.classSize;
					var schedule = tmpCourse[i].schedule;
					//匹配排课
					var classInfos = this.arrangeCourse(spareTime,tmpTeacher,schedule,classSize);
					if(classInfos.length>0){
						arrangeCourse.courses[i].teacherId = teachers_arr[ib].teacherId;
						arrangeCourse.courses[i].teacherName = teachers_arr[ib].teacherName;
						arrangeCourse.courses[i].classInfos = classInfos;
						//将该老师的空余时间减去定好的上课时间 teachers_arr[ib].idleTime
						for(var ic=0;ic<teachers_arr[ib].idleTime.length;ic++){
							for(var id=0;id<classInfos.length;id++){
								if(teachers_arr[ib].idleTime[ic] == classInfos[id].time){
									teachers_arr[ib].idleTime.splice(ic,1);
								}
							}
						}
						//减掉这个班的空余时间 arrangeCourse.spareTime
						for(var ie=0;ie<spareTime.length;ie++){
							for(var ig=0;ig<classInfos.length;ig++){
								if(spareTime[ie] == classInfos[ig].time){
									arrangeCourse.spareTime.splice(ie,1);
								}
							}
						}
						flag_teacher++;
						break;//排课成功跳出for循环，确定该门课是这个老师上
					}
				}
				this.teachers = teachers_arr;//对元数据进行操作
				this.classes.push(arrangeCourse);
				
				if(flag_teacher == 0){
					var failCourse = new Object();
					failCourse.push(tmpCourse[i]);//
				}
			}
		}
		return failCourse;//返回排课失败的课程，但无法记录失败的原因
	}


	//true:排课成功
	//false:排课失败（匹配老师失败）arrangeTeacher返回不存在符合要求的老师
	//班级的空余时间和老师的空余时间都是要减掉之后返回的
	//spareTime班级空余时间,tmpTeacher老师的空余时间,scedule学分,classSize班级人数
	courseArrange.prototype.arrangeCourse = function(spareTime,tmpTeacher,schedule,classSize) {
		//确定该门课是这个老师上?后续还要将这个老师的空余时间表减掉这门课安排的时间
		//3，5个学分的课按4，6来算，后续考虑课时的修改
		var count = Math.ceil(schedule/2);
		var rooms = this.rooms;
		var classInfos = new Array();
		for(var n=0;n<count;n++){//根据几节课判断循环次数
			for(var na=0;na<tmpTeacher.length;na++){
				for(var nb=0;nb<spareTime.length;nb++){
					if(tmpTeacher[na] == spareTime[nb]){//老师的空余时间和班级的空余时间匹配
						//根据确定好的时间,选择教室。暂时不考虑相邻的课的教室远近
						//暂时不考虑提前将教室分类和教室类型，以及教室容量是否远大于班级人数
						for(var nc=0;nc<rooms.length;nc++){
							var classInfo = new Array();
							if(rooms[nc].roomSize >= classSize){
								for(var nd=0;nd<rooms[nc].emptyTime.length;nd++){
									if(rooms[nc].emptyTime[nd] == tmpTeacher[na]){
										//这个教室空余，就可以分给这门课啦啦啦、
										//减掉这个教室的空余时间 
										this.rooms[nc].emptyTime.splice(nd,1);
										classInfo.push(rooms[nc].roomId);
										classInfo.push(rooms[nc].roomName);
										classInfo.push(rooms[nc].emptyTime[nd]);							
										classInfos.push(classInfo);
										classInfo = [];
										return classInfo;
										//从之前的函数中减掉这个班级的空余时间
										//将这门课的教室和时间返回。则确定这个老师就是要求的老师，减掉这个老师的空余时间									
									}
								}
							}
						}
					}
				}
			}
		}
		return classInfos;
	}

































})(window)