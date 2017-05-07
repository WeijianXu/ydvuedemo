'use strict';
import subMissions from '../Models/subMissions';

const data = {
    title: "一灯学堂学员学习系统",
    content: "Hello World"
};
const indexController = {
    index() {
        return async(ctx, next) => {
            var list = await ctx.request.body
            const student = await new subMissions(ctx);
            // list.result.uid=ctx.session.userInfo.user_info.uid
            //data数据内容
            const data = {}
            data.uid = ctx.session.userInfo.user_info.uid
            data.skills = list.result.skills
            data.space = list.result.space
            data.salary = Number(list.result.salary)
            data.description = decodeURIComponent(list.result.description)



            const examResult = await student.getStudentMessage(data);

            ctx.body = "success"

        }
    }
};
export
default indexController;