 import './student.less';
 // import $ from 'jquery'
 // import reqwest from 'reqwest'
 import qe from './qe.es'
 import axios from 'axios'

 qe();


 /*let student1 = {
     init() {
         $("#post_body").qeditor({});

         // Custom a toolbar icon
         var toolbar = $("#post_body").parent().find(".qeditor_toolbar");
         var link = $("<a href='#'><span class='icon-smile' title='smile'></span></a>");
         link.click(function() {
             alert("Put you custom toolbar event in here.");
             return false;
         });
         toolbar.append(link);

         // Custom Insert Image icon event
         function changeInsertImageIconWithCustomEvent() {
             var link = toolbar.find("a.qe-image");
             link.attr("data-action", "");
             link.click(function(e) {
                 alert("New insert image event");
                 return false;
             });
             alert("Image icon event has changed, you can click it to test");
             return false;
         }


         $('.btn').click(function(event) {
             var kills = [] //掌握技能
             var citys = [] //期望城市
             var scalay = []
             var list = [] //薪资


             $("input:checkbox[name='result']:checked").each(function() { // 遍历name=test的多选框
                 var p = document.getElementById("killData")
                 var c = p.getElementsByTagName("li")

                 var ResultValues = parseInt($(this).val()); // 每一个被选中项的值

                 var order = Number(ResultValues) - 1
                     // kills.push({id:ResultValues,value:c[order].innerText})
                 if (kills.indexOf(ResultValues) == -1) {
                     kills.push(ResultValues)
                 }

             });

             $("input:checkbox[name='city']:checked").each(function() { // 遍历name=test的多选框
                 var p = document.getElementById("cityData")
                 var c = p.getElementsByTagName("li")


                 var CityValues = parseInt($(this).val()); // 每一个被选中项的值
                 var orders = Number(CityValues) - 1
                     // citys.push({id:CityValues,value:c[orders].innerText})
                     // 
                 if (citys.indexOf(CityValues) == -1) {
                     citys.push(CityValues)
                 }


             });


             var wageData = document.getElementById("wageData")
             var _wageData = wageData.getElementsByTagName("span")

             var wageOrder = $('input:radio[name="salary"]:checked').val()



             if (wageOrder != undefined) {
                 list.push(wageOrder)
             }

             //** ** ** ** ** ** ** ** ** ** 请选择掌握技能 ** ** ** ** ** ** ** ** ** ** *
             if (kills.length == 0) {

                 $("#skillsTip").text("请选择掌握技能")
                 if (citys.length == 0) {
                     $("#locationTip").text("请选择期望地点")
                 } else {
                     $("#locationTip").text("")
                 }
                 if (list.length == undefined || list.length == 0) {
                     $("#salaryTip").text("请选择期望薪资")
                 } else {
                     $("#salaryTip").text("")
                 }
                 return false
             } else {
                 $("#skillsTip").text("")
             }
             //** ** ** ** ** ** ** ** ** ** 请选择掌期望地点 ** ** ** ** ** ** ** ** ** ** *
             if (citys.length == 0) {

                 $("#locationTip").text("请选择期望地点")

                 if (list.length == undefined || list.length == 0) {
                     $("#salaryTip").text("请选择期望薪资")
                 } else {
                     $("#salaryTip").text("")
                 }
                 return false;

             } else {
                 $("#locationTip").text("")
             }
             //** ** ** ** ** ** ** ** ** ** 请选择期望月薪 ** ** ** ** ** ** ** ** ** ** *

             if (list.length == undefined || list.length == 0) {
                 $("#salaryTip").text("请选择期望薪资")
                 return false;
             } else {
                 $("#salaryTip").text("")
             }

             var test = $("#post_body").val()


             var result = {
                 uid: 123,
                 skills: kills,
                 space: citys,
                 salary: wageOrder,
                 description: encodeURIComponent(test)
             }

             console.log(result)



             axios.post('/studentResume', {
                     result: result,
                     error_code: 0,
                     msg: "success."
                 })
                 .then(function(response) {
                     if (response.status == 200) {
                         // kills.length = 0;
                         // citys.length = 0;
                         // wageOrder.length = 0;
                         // test = ""
                     }
                 }).catch(function(error) {
                     console.log(error);
                 });



         })
     }
 };*/
 
import Vue from 'vue';
import Vuex from 'vuex';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex);
var getter = {
  skills: new Set(),
  citys: new Set(),
  salary: '',
  desc: '',
};

const store = new Vuex.Store({
  state: {
    skills: [{id: 'html',value: 'Html'}, {id: 'js',value: 'Javascript'}],
    locations: [{id: 'beijing', value: '北京'},{id: 'shanghai', value: '上海'}],
    salarys: [{id: 'view', value: '面议'},{id: 'low5000', value: '< 5000'}],

  },
  mutations: {
    
  },
  // 异步实现，用action
  actions: {
    
    submit (context, {data}) {
      console.log(data);
      // 提交操作
      // context.commit('increment')
      if (data.skills.size == 0) {
        return ;
      }
      if (data.citys.size == 0) {
        return ;
      }
      if (!data.salary) {
        return ;
      }
      
      return new Promise((resolve, reject) => {
        axios.post('/studentResume', {
             result: data,
             error_code: 0,
             msg: "success."
         })
         .then(function(response) {
             if (response.status == 200) {
                /*getter = {
                  skills: new Set(),
                  citys: new Set(),
                  salary: '',
                  desc: '',
                };*/
             }
         }).catch(function(error) {
             console.log(error);
         });
      });
      
    }
  }
});

const Skill = {
  template: `<div class="one">
        <h3 class="cire">掌握技能点 <span class="tips" id="skillsTip"></span></h3>
        <div class="line">
            <hr/>
        </div>
        <div class="task">
            <ul class="student kills" id="killData">
                <li v-for="key in skills">
                    <input type="checkbox" class="js-checkbox-all selects checkbox-tv" :value="key.id" v-on:click="getValue" name="result">
                    <span class="test" >{{key.value}}</span></li>
            </ul>
        </div>
    </div>`,
  computed: {
    skills () {
      return this.$store.state.skills
    }
  },
  methods: {
    getValue: function (e) {
      getter.skills.add(e.target.value);
      console.log(e, getter.skills);
    }
  }
};

const Location = {
  template: `<div class="two kills"  id="cityData">
        <h3 class="cire">期望地点 <span class="tips"  id="locationTip"></span></h3>
        <div class="line">
            <hr/>
        </div>
        <div class="task">
            <ul class="student kills">
                <li v-for="key in locations">
                    <input type="checkbox" class="js-checkbox-all selects checkbox-tv" :value="key.id" v-on:click="getValue" name="city">
                    <span class="test">{{key.value}}</span>
                </li>
            </ul>
        </div>
    </div>`,
  computed: {
    locations () {
      return this.$store.state.locations
    }
  },
  methods: {
    getValue: function (e) {
      getter.citys.add(e.target.value);
      console.log(e, getter.citys);
    }
  }
};

const Salary = {
  template: `<div class="three ">
        <h3 class="cire">期望薪资 <span class="tips"  id="salaryTip"></span></h3>
        <div class="line">
            <hr/>
        </div>
        <div class="task">
            <ul class="student kills"  id="wageData">
                <li v-for="key in salarys">
                    <input type="radio" name="salary" :value="key.id" v-on:click="getValue"> <span class="test money">{{key.value}}</span>
                </li>
            </ul>
        </div>
    </div>`,
  computed: {
    salarys () {
      return this.$store.state.salarys
    }
  },
  methods: {
    getValue: function (e) {
      getter.salary = e.target.value;
      console.log(e, getter.salary);
    }
  }
};

const Qeditor = {
  template: `<div class="">
        <h3 class="cire">自我描述</h3>
        <div class="line">
            <hr/>
        </div>
        <form>
            <div>
                <form class="form-horizontal" type="POST">
                    <div class="control-group">
                    </div>
                    <div class="control-group">
                        <div class="">
                            <textarea id="post_body" v-on:blur="getValue" name="body" class="textarea" placeholder="自我描述"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </form>
    </div>`,
  methods: {
    getValue: function (e) {
      getter.desc = e.target.value;
      console.log(e, getter.desc);
    }
  }
};

const Submit = {
    template: `<div class="success">
    <button type="button" class="btn btn-success submits" v-on:click="submit">提交</button>
</div>`,
methods: {
    submit: function (e) {
      store.dispatch('submit', {
        data: getter
      })
    }
  }
};

const student = {
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Submit, Skill, Location, Salary, Qeditor},
  template: `
    <div class="app">
      <div class="task-content">
        <h1 class="studentSystem">简历填写</h1>
        <Skill></Skill>
        <Location></Location>
        <Salary></Salary>
        <Qeditor></Qeditor>
      </div>
      <br/>
      <br/>
      <Submit></Submit>
    </div>
  `
};
export
default student;