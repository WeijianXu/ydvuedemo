'use strict';
import index from './indexController';
import resume from './resumeController';
const controllerInit = {
    getAllrouters(app, router) {
        app.use(router(_ => {
            _.get('/', index.index());
            _.get('/index', index.index());
            _.get('/index.html', index.index());
            _.get('/index/index', index.index());
            _.get('/index/getdata', index.getData());
            _.get('/resume', resume.index());
            // _.get('/studentResume', resume.studentResume());
        }));
    }
};
export
default controllerInit;