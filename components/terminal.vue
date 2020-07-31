<template>
  <div :class="dark?'dark-terminal terminal':'light-terminal terminal'">
        <el-row class=terminalMenu>
            <el-col class="terminalButtonset" :span="6">
                <div class="terminalButtons terminalClose"></div>
                <div class="terminalButtons terminalMinimize"></div>
                <div class="terminalButtons terminalZoom"></div>
            </el-col>
            <el-col class="terminalName" :span="12">
                <div><i class="fab fa-apple" style="margin-right:5px"/>ggolfz — bash</div>
            </el-col>
            <el-col :span="6">
                &nbsp;
            </el-col>
        </el-row>
        <el-row class="terminalScreen">
            <pre class="terminalText">
{{`${script}`}}<span style='background:rgba(255,255,255,0.5)'>&nbsp;</span></pre>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return{
            script:"",
            prefix: "GGolfzs-MBP:~ ggolfz$ ",
            line:3,
            text:"Hi there, I'm GGolfz\nA \"Full Stack Software Developer\"\nfrom Thailand.\nI'm just a little guy that has \nthe dream since childhood, that is \n\"I want to be a programmer\"\nand I also trust that we never \ngonna know if we never even try.\nThis website will let you get to\nknow me better.\nWelcome to my world :)\n   ____________      ______   \n  / ____/ ____/___  / / __/___\n / / __/ / __/ __ \\/ / /_/_  /\n/ /_/ / /_/ / /_/ / / __/ / /_\n\\____/\\____/\\____/_/_/   /___/\n"
            
        }
    },
    props: {
        dark:Boolean
    },
    methods: {
        before() {
            let current = new Date();
            this.script += `Last login: ${this.formatTime(current)} on ggolfz\n\n`;
            this.script += this.prefix
        },
        formatTime(date) {
            let weekday = date.getDay()
            switch(weekday){
                case 0: weekday="Sun";break;
                case 1: weekday="Mon";break;
                case 2: weekday="Tue";break;
                case 3: weekday="Wed";break;
                case 4: weekday="Thu";break;
                case 5: weekday="Fri";break;
                case 6: weekday="Sat";break;
            }
            let day = date.getDate()
            let month = date.getMonth()
            switch(month){
                case 0: month="Jan";break;
                case 1: month="Feb";break;
                case 2: month="Mar";break;
                case 3: month="Apr";break;
                case 4: month="May";break;
                case 5: month="Jun";break;
                case 6: month="Jul";break;
                case 7: month="Aug";break;
                case 8: month="Sep";break;
                case 9: month="Oct";break;
                case 10: month="Nov";break;
                case 11: month="Dec";break;
            }
            let hours = date.getHours();
            hours = hours < 10 ? "0"+hours : hours
            let mins = date.getMinutes();
            mins = mins < 10 ? "0"+mins : mins
            let sec = date.getSeconds();
            sec = sec < 10 ? "0"+sec : sec
            return weekday+" "+month+" "+day+" "+hours+":"+mins+":"+sec;  
        },
        todo() {
            setInterval(()=>{
                if(this.text.length == 0){
                    clearInterval();
                }
                if(this.text.indexOf("\n") == 0){
                    this.script += "\n"+this.prefix;
                    this.text = this.text.substring(1);
                    this.line+=1
                    if(this.line >=14){
                        let temp = document.getElementsByClassName('terminalScreen');
                        
                        temp[0].scrollTop = temp[0].scrollHeight
                    }
                } else{
                    this.script+= this.text.substring(0,1);
                    this.text = this.text.substring(1);
                }
            },100)
        },
                
    },
    mounted(){
        this.before()
        this.todo()
    }
}
</script>

<style>

.terminalName {
  text-align: center;
  font-size: 0.9em;
  font-weight: bold;
}
.terminalButtons {
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 3px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;
}

.terminalMinimize {
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
}

.terminalZoom {
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
}

.terminalMenu {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  text-align: left;
  padding-left:5px;
  display:flex;
  align-items: center;
  border: 1.2px solid #6c6c6f;
  border-bottom: none;
}
.dark-terminal .terminalMenu{
  background-color: #3e3d41;
}
.light-terminal .terminalMenu{
  background-color: #bbb;
}
.dark-terminal .terminalName{
  color:#e6e6e6;
}
.light-terminal .terminalName{
  color: #333;
}
.terminalText{
  text-align: left;
  color:#dcdcdc
}
.terminalScreen {
  background-color: #151515;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1.2px solid #6c6c6f;
  border-top: none;
}
@media only screen and (max-width: 767px) and (orientation: portrait){
    .terminalScreen {
        padding: 10px;
        height: calc(30px + (19 * 0.8em));
    }
    .terminal {
        width: 100%;
        margin-top: 5%;
    }
    .terminalText {
        font-size:0.8em;
    }
}
@media only screen and (max-width: 767px) and (orientation: landscape){
    .terminal {
        width: 100%;
    }
    .terminalScreen {
        padding: 10px;
        height: calc(20px + (14 * 0.8em));
        overflow: auto;
    }
    .terminalText {
        font-size:0.8em;
    }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) and (orientation: portrait){
    .terminal {
        width: 80%;
        margin-top: 3%;
    }
    .terminalScreen {
        padding: 20px;
        height: calc(25px + (19 * 1.2em));
    }
    .terminalText {
        font-size:1.2em;
    }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
    .terminal {
        width: 80%;
        margin-top: 3%;
    }
    .terminalScreen {
        padding: 20px;
        height: calc(30px + (19 * 1.2em));
        overflow: auto;
    }
    .terminalText {
        font-size:1.2em;
    }
}
@media only screen and (min-width: 1025px) {
    .terminal {
        width: 70%;
    }
    .terminalScreen {
        padding: 30px 30px 10px 30px;
        height: calc(40px + (19 * 1.3em));
        overflow: auto;
    }
    .terminalText {
        font-size:1.3em;
    }
}
.terminalScreen::-webkit-scrollbar{
    display: none;
}
</style>
