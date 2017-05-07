/*
 *@Description 获取考试接口
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-18
 */
import config from '../config/config';
import safeRequest from '../Libs/safeRequest';
// console.log("*****" )
// console.log(safeRequest)
// console.log("*****" )
export
default class subMissions {
    constructor(ctx) {
        this.ctx = ctx;
    }
    getStudentMessage(list) {
            
        const safeRequestIns = new safeRequest(this.ctx, config.studentDetails,list,config.Rds_apiUrl);
        return safeRequestIns.request();
    }
    getScoreList() {
        const data = {
            uid: this.ctx.session.userInfo.uid
        };
        const safeRequestIns = new safeRequest(this.ctx, config.getStudentScoreList, data);
        return safeRequestIns.request();
    }
};