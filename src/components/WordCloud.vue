<template>
<div>
    <VueWordCloud
            v-if="viewMode==='词云'"
            :words="memberTags"
            :color="colorWeight"
            :font-size-ratio="6"
            :spacing="0.25"
            :animation-duration="2500"
            font-family="Arial"
            style="position: fixed;
            left: 50%;
            top: 60%;
            transform: translate(-50%, -60%);
            width: 95%;
            height: 90%"
    ></VueWordCloud>
    <div v-if="viewMode==='列表'">
        <table class="table table-striped table-bordered">
            <thead class="table thead-info">
                <tr>
                    <th>排名</th>
                    <th>Tag名称</th>
                    <th>频率</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tag, index) in memberTags" :key="tag[0]">
                    <td>{{index + 1}}</td>
                    <td>{{tag[0]}}</td>
                    <td>{{tag[1]}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script charset="utf-8">
  import VueWordCloud from 'vuewordcloud';
  import aygTags from '../assets/阿云嘎_tags'
  import zylTags from '../assets/郑云龙_tags'
  import tzTags from '../assets/仝卓_tags'
  import ydTags from '../assets/余笛_tags'
  import zsTags from '../assets/周深_tags'
  import zcTags from '../assets/张超_tags'
  import fsjTags from '../assets/方书剑_tags'
  import lqTags from '../assets/李琦_tags'
  import lpjTags from '../assets/梁朋杰_tags'
  import hzgTags from '../assets/洪之光_tags'
  import wxTags from '../assets/王晰_tags'
  import jhyTags from '../assets/简弘亦_tags'
  import ccyTags from '../assets/蔡程昱_tags'
  import jfTags from '../assets/贾凡_tags'
  import lypTags from '../assets/陆宇鹏_tags'
  import gthTags from '../assets/高天鹤_tags'
  import hzhfTags from '../assets/黄子弘凡_tags'
  import gzqTags from '../assets/龚子棋_tags'
  import dhTags from '../assets/丁辉_tags'
  import dwTags from '../assets/代玮_tags'
  import lbhTags from '../assets/刘彬濠_tags'
  import nfTags from '../assets/南枫_tags'
  import xyTags from '../assets/星元_tags'
  import lxzTags from '../assets/李向哲_tags'
  import lyfTags from '../assets/李彦锋_tags'
  import lwbTags from '../assets/李文豹_tags'
  import jsqTags from '../assets/金圣权_tags'
  import cbhTags from '../assets/陈博豪_tags'
  import jhcTags from '../assets/鞠红川_tags'
  import mjTags from '../assets/马佳_tags'
  import gyTags from '../assets/高杨_tags'
  import skTags from '../assets/石凯_tags'
  import zlstTags from '../assets/翟李朔天_tags'
  import cyTags from '../assets/蔡尧_tags'
  import wkTags from '../assets/王凯_tags'
  import ljlTags from '../assets/廖佳琳_tags'

  export default {
    components: {
      VueWordCloud
    },
    name: "WordCloud",
    data: function () {
      return {
        listFields: ['Tag名称', '频率'],
        memberMaps: [
          { mem: '阿云嘎', tags: aygTags },
          { mem: '郑云龙', tags: zylTags },
          { mem: '仝卓', tags: tzTags },
          { mem: '余笛', tags: ydTags },
          { mem: '周深', tags: zsTags },
          { mem: '张超', tags: zcTags },
          { mem: '方书剑', tags: fsjTags },
          { mem: '李琦', tags: lqTags },
          { mem: '梁朋杰', tags: lpjTags },
          { mem: '洪之光', tags: hzgTags },
          { mem: '王晰', tags: wxTags },
          { mem: '简弘亦', tags: jhyTags },
          { mem: '蔡程昱', tags: ccyTags },
          { mem: '贾凡', tags: jfTags },
          { mem: '陆宇鹏', tags: lypTags },
          { mem: '高天鹤', tags: gthTags },
          { mem: '黄子弘凡', tags: hzhfTags },
          { mem: '龚子棋', tags: gzqTags },
          { mem: '丁辉', tags: dhTags },
          { mem: '代玮', tags: dwTags },
          { mem: '刘彬濠', tags: lbhTags },
          { mem: '南枫', tags: nfTags },
          { mem: '星元', tags: xyTags },
          { mem: '李向哲', tags: lxzTags },
          { mem: '李彦锋', tags: lyfTags },
          { mem: '李文豹', tags: lwbTags },
          { mem: '金圣权', tags: jsqTags },
          { mem: '陈博豪', tags: cbhTags },
          { mem: '鞠红川', tags: jhcTags },
          { mem: '马佳', tags: mjTags },
          { mem: '高杨', tags: gyTags },
          { mem: '石凯', tags: skTags },
          { mem: '翟李朔天', tags: zlstTags },
          { mem: '蔡尧', tags: cyTags },
          { mem: '廖佳琳', tags: ljlTags },
          { mem: '王凯', tags: wkTags }
        ]
      }
    },
    computed: {
      member: function () {
        return this.$store.state.member
      },
      memberTags: function () {
        let tags = this.memberMaps.filter((x)=>{
          return x['mem'] === this.member
        });
        return tags[0]['tags'].slice(0, 101);
      },
      viewMode: function () {
        return this.$store.state.viewMode
      }
    },
    methods: {
      colorWeight: function ([, ]) {
        let colors = ['#F76C6C', '#FEDF04', '#00D49D', '#1D86AD', '#74D2DA', 'Maroon', 'Orange', 'MidnightBlue'];
        return colors[Math.floor(Math.random()*colors.length)]
      }
    }
  }
</script>

<style scoped>
.thead-info {
    background-color: slategrey;
    color: white;
}
</style>