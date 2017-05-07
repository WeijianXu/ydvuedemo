'use strict';
// import examModel from '../Models/resumeModel';

// import  Resultscores from '../Models/examModel';


const data = {
    title: "一灯学堂学员学习系统",
    content: "Hello World"
};
const indexController = {
    index() {
        return async(ctx, next) => {
            ctx.body = await ctx.render('student/pages/student.html', {
                title: "京程一灯"
            });
        }

        /*return async(ctx, next) => {
            //获得考试成绩内容

           const _examresult = new Resultscores(ctx);

            const examResults = await _examresult.getScoreList();

            let _scores = examResults.result.scores;

            console.log("_scores",_scores.length)

            const studentScore=_scores.length


            console.log("长度", studentScore)



            const examModelApp = new examModel(ctx);

            const forwardCityApp = new examModel(ctx);

            const salary = new examModel(ctx);

            const examResult = await examModelApp.getScoreList();

            const forwardCityResult = await forwardCityApp.getfowardCity();

            const salaryResult = await salary.getsalary();

            const MasterTheSkill = examResult.result.skills

            const forwardCitys = forwardCityResult.result.place

            console.log("forwardCitys城市",forwardCitys)

            const havescalay = salaryResult.result.place

            if(MasterTheSkill&&forwardCitys){
                     ctx.body = await ctx.render('student/pages/student.html', {
                    score:studentScore,
                    title: "一灯学堂 学员学习系统",
                    userinfo: ctx.session.userInfo.user_info,
                    result: MasterTheSkill,
                    city: forwardCitys,
                    scalay: havescalay,
                });
            }
            else{
                ctx.body = await ctx.render('error/pages/404.html', {});
            }
    
        }*/
    },
    studentResume() {
        // mock.js
    }
};
export
default indexController;
