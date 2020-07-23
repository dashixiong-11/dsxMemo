<template>
   <div class="memo-money-numberPad" ref="numberPad">
      <div class="output">
         <div class="output-remarks">
            <span>备注:</span>
            <input type="text" v-model="value" placeholder="在此输入备注">
         </div>
         <span class="output-amount">{{output}}</span>
      </div>
      <div class="row">
         <button @click="entry">7</button>
         <button @click="entry">8</button>
         <button @click="entry">9</button>
         <button @click="trigger"> {{x? '今天':selectedDate}}</button>
         <button @click="entry">4</button>
         <button @click="entry">5</button>
         <button @click="entry">6</button>
         <button @click="entry">+</button>
         <button @click="entry">1</button>
         <button @click="entry">2</button>
         <button @click="entry">3</button>
         <button @click="entry">-</button>
         <button @click="entry">.</button>
         <button @click="entry">0</button>
         <button @click="del">删除</button>
         <button v-if="partTwo !== ''" @click="calc">=</button>
         <button v-else @click="ok">完成</button>
         <!--
                  <button v-for="i in numberPadListOne" @click="entry(i)" :key="i"> {{i}}</button>
         -->
      </div>
      <awesome-picker ref="picker" type="date" @confirm="handlePickerConfirm"></awesome-picker>
   </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import awesomePicker from '../../../node_modules/vue-awesome-picker/src/lib/vue-awesome-picker.vue';

    @Component({
        components: {awesomePicker}
    })
    export default class NumberPad extends Vue {
        output = '0';
        value = '';
        type = '';
        partOne = '';
        partTwo = '';
        selectedDate = '';
        timestamp = `${new Date().getTime()}`

        mounted(){
            this.selectedDate = this.today()
        }
        @Watch('output')
        onChangeOutput(value: string) {
            if (value.indexOf('+') >= 0 || value.indexOf('-') >= 0) {
                const textArray = this.output.split(this.type);
                console.log(textArray);
                this.partOne = textArray[0];
                this.partTwo = textArray[1];
            }
            if (!value) {
                this.output = '0';
            }
        }
        today(){
            const time = new Date()
            const year = time.getFullYear()
            const month = time.getMonth()+1
            const date = time.getDate()
            return [year,month,date].join('/')
        }
        trigger() {
            (this.$refs.picker as any).show();
        }

        get x(){
            return this.today() === this.selectedDate
        }

        getNum(val: string){
            return val.substr(0,val.length-1)
        }

        handlePickerConfirm(value: any) {
            const array: any = []
            value.forEach((i: any)=>{
                array.push(this.getNum(i.value))
            })
            this.timestamp = new Date(array[0],array[1],array[2]).getTime().toString()
            this.selectedDate = array.join('/')
        }

        entry(e: MouseEvent) {
            if (this.output.length < 10) {
                const text = (e.target as HTMLButtonElement).textContent as string;
                if (this.output === '0' && text !== '.' && text !== '+' && text !== '-') {
                    this.output = text;
                    return;
                }
                if (this.output.indexOf('.') >= 0 && text === '.' && this.output.indexOf('+') < 0 && this.output.indexOf('-') < 0) {
                    return;
                }
                if ((this.output[this.output.length - 1] === '+' || this.output[this.output.length - 1] === '-') && (text === '+' || text === '-')) {
                    this.type = text;
                    this.output = this.output.replace(/[+|-]/, text);
                    return;
                }
                if ((this.output.indexOf('-') >= 0 || this.output.indexOf('+') >= 0) && (text === '-' || text === '+')) {
                    this.type = text;
                    this.calc();
                }
                if (text === '+' || text === '-') {
                    this.type = text;
                }
                this.output += text;
            }
        }

        calc() {
            let result = eval(this.output);
            if (`${result}`.indexOf('.') >= 0) {
                result = Math.round(result * 100) / 100;
            }
            this.output = `${result}`;
            this.partTwo = '';
        }


        del() {
            this.output = this.output.substr(0, this.output.length - 1);
        }

        ok() {
            if(this.output !== '0'){
                this.$emit('outputData', {money: this.output, remarks: this.value, date: this.timestamp});
            }
        }
    }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .memo-money-numberPad {
      background: #fff;
      position: fixed;
      width: 100%;
      bottom: 54px;

      .output {
         height: 50px;
         padding: 0 10px;

         input {
            background: none;
            outline: none;
            border: none;
            flex-grow: 1;
            margin: 0 1em;
         }

         &-remarks {
            flex-grow: 1;
            display: flex;
            align-items: center;

            > span {
               flex-shrink: 0;
            }
         }

         display: flex;
         align-items: center;

         &-amount {
            width: 6em;
            font-size: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
         }
      }

      .row {
         border-top: 1px solid $color-border;

         > button {
            background: transparent;
            border: none;
            width: 25%;
            height: 44px;
            border-bottom: 1px solid $color-border;

            &:not(:last-child) {
               border-right: 1px solid $color-border;
            }
         }
      }
   }
</style>
