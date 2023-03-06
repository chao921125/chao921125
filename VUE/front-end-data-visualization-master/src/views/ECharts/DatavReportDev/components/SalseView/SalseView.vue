<template>
  <div class="salse__view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template #header>
        <div class="menu__wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales__view__menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu__right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              class="salse__view__date__picker"
              size="small"
              v-model="datePicker.date"
              type="daterange"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :shortcuts="datePicker.shortcuts"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template #default>
        <div class="salse__view__chart__wrapper">
          <ChartDom class="chart__dom" :options="salseChartOption" />
          <div class="sales__view__list">
            <div class="sales__view__title">排行榜</div>
            <div class="list__item__wrapper">
              <div class="list__item" v-for="(item, index) in rankData" :key="item.no">
                <div
                  :class="['list__item__no', +item.no <= 3 ? 'top__no' + (index + 1) : '']"
                >
                  {{ item.no }}
                </div>
                <div class="list__item__name">{{ item.name }}</div>
                <div class="list__item__money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import ChartDom from "./ChartDom.vue";
import * as echarts from "echarts";

const activeIndex = ref("1");

function onMenuSelect(index) {
  activeIndex.value = index;
}

const radioSelect = ref("今日");

const datePicker = reactive({
  date: "",
  shortcuts: [
    {
      text: "最近一周",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        return [start, end];
      },
    },
    {
      text: "最近一个月",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        return [start, end];
      },
    },
    {
      text: "最近三个月",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        return [start, end];
      },
    },
  ],
});

// 销售额
const salseChartOption = ref({
  title: {
    text: "年度销售额",
    textStyle: {
      fontSize: 12,
      color: "#666",
    },
    top: 20,
    left: 25,
  },
  xAxis: {
    type: "category",
    data: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: "#999",
      },
    },
    axisLine: {
      lineStyle: {
        color: "#999",
      },
    },
    axisLabel: {
      color: "#333",
    },
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        type: "dotted",
        color: "#eee",
      },
    },
  },
  series: [
    {
      type: "bar",
      barWidth: "35%",
      data: [200, 250, 300, 350, 186, 462, 452, 219, 626, 437, 515, 656],
    },
  ],
  color: new echarts.graphic.LinearGradient(
    0, 0, 0, 1, 
    [
      { offset: 0, color: "#fa709a" },
      { offset: 1, color: "#fee140" }
    ]
  ),
  emphasis: {
    itemStyle: {
      color: new echarts.graphic.LinearGradient(
        0, 0, 0, 1, 
        [
          { offset: 0, color: "#f83600" },
          { offset: 1, color: "#f9d423" }
        ]
      ),
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 70,
    bottom: 50,
    left: 60,
    right: 60,
  },
});

// 排行榜数据
const rankData = ref([
  {
    no: 1,
    name: "麦当劳",
    money: "323,234",
  },
  {
    no: 2,
    name: "麦当劳",
    money: "323,234",
  },
  {
    no: 3,
    name: "麦当劳",
    money: "323,234",
  },
  {
    no: 4,
    name: "麦当劳",
    money: "323,234",
  },
  {
    no: 5,
    name: "麦当劳",
    money: "323,234",
  },
  {
    no: 6,
    name: "麦当劳",
    money: "323,234",
  },
  {
    no: 7,
    name: "麦当劳",
    money: "323,234",
  },
]);
</script>

<style lang="scss" scoped>
.menu__wrapper {
  position: relative;
  display: flex;
}

.sales__view__menu {
  width: 100%;
  padding-left: 20px;

  .el-menu-item {
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
  }
}

.menu__right {
  position: absolute;
  right: 0;
  top: 0;
  right: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  :deep(.salse__view__date__picker) {
    margin-left: 20px;
  }
}

.salse__view__chart__wrapper {
  display: flex;
  height: 270px;

  .chart__dom {
    flex: 0 0 70%;
    width: 70%;
    height: 100%;
  }

  .sales__view__list {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .sales__view__title {
      margin-top: 20px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }

    .list__item__wrapper {
      margin-top: 15px;

      .list__item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0;

        .list__item__no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #333;

          &.top__no1 {
            background: #ea5455;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }

          &.top__no2 {
            background: #f07b3f;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }

          &.top__no3 {
            background: #ffd460;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }

        .list__item__name {
          margin-left: 10px;
          color: #333;
        }

        .list__item__money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}

:deep(.el-card__header) {
  border-bottom: none;
  padding: 0;
}
</style>