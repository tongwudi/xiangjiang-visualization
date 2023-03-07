<template>
  <div class="main">
    <div class="steps">
      <div class="step">
        <a-badge color="cyan" text="中远期" />
      </div>
      <div class="step">
        <a-badge color="cyan" text="立项" />
      </div>
      <div class="step">
        <a-badge color="cyan" text="投标" />
      </div>
      <div class="step">
        <a-badge color="cyan" text="订单" />
      </div>
      <div class="step">
        <a-badge color="cyan" text="货款" />
      </div>
      <div class="step">
        <a-badge color="cyan" text="库存" />
      </div>
    </div>

    <div class="content">
      <!-- 中远期 -->
      <div class="section">
        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#108ee9">中远期</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.zyq_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.zyq_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.zyq_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.zyq_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">中远期转化</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.zyq_zh_czyqzlxfs || 0 }}</li>
              <li class="txt ellipsis">中远期转立项份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.zyq_zh_czyqzlxfs || 0 }}</li>
              <li class="txt ellipsis">中远期转立项金额</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.zyq_zh_ljgbfs || 0 }}</li>
              <li class="txt ellipsis">累计关闭份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.zyq_zh_ljgbje || 0 }}</li>
              <li class="txt ellipsis">累计关闭金额</li>
            </ul>
          </a-row>
          <a-divider />
          <div class="statistic-box">年累计份数转化率</div>
          <a-progress size="small" :percent="info.zyq_zh_nljfszhl" />
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#cd201f">重点项目</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.yzq_zdxm_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.yzq_zdxm_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.yzq_zdxm_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.yzq_zdxm_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 立项 -->
      <div class="section">
        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#108ee9">立项</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.lx_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.lx_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">已立项跟踪（未投标）</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_ylxgz_ljfs || 0 }}</li>
              <li class="txt ellipsis">累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_ylxgz_ljje || 0 }}</li>
              <li class="txt ellipsis">累计金额</li>
            </ul>
          </a-row>
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">已投标转出结案</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_ytbzcja_ljfs || 0 }}</li>
              <li class="txt ellipsis">累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_ytbzcja_ljje || 0 }}</li>
              <li class="txt ellipsis">累计金额</li>
            </ul>
          </a-row>
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">立项后关闭</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_lxhgb_ljfs || 0 }}</li>
              <li class="txt ellipsis">累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.lx_lxhgb_ljje || 0 }}</li>
              <li class="txt ellipsis">累计金额</li>
            </ul>
          </a-row>
        </div>
      </div>

      <!-- 投标 -->
      <div class="section">
        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#108ee9">投标</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.tb_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.tb_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">标前估计</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_bqgj_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_bqgj_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_bqgj_dyfs || 0 }}</li>
              <li class="txt ellipsis">当月份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_bqgj_dyje || 0 }}</li>
              <li class="txt ellipsis">当月金额</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.tb_bqgj_nljwtgfs || 0 }}</li>
              <li class="txt ellipsis">年累计未通过份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-title">
            <a-tag color="#cd201f">中标率</a-tag>
          </a-row>
          <div class="statistic-box">当月份数中标率</div>
          <a-progress size="small" :percent="info.tb_zbl_dyfszbl" />
          <div class="statistic-box">当月金额中标率</div>
          <a-progress size="small" :percent="info.tb_zbl_dyjezbl" />
          <div class="statistic-box">累计份数中标率</div>
          <a-progress
            size="small"
            :percent="info.tb_zbl_ljfszbl"
            :success="{ percent: info.tb_zbl_ljfszbl }"
          />
          <div class="statistic-box">累计金额中标率</div>
          <a-progress
            size="small"
            :percent="info.tb_zbl_ljfszbl"
            :success="{ percent: info.tb_zbl_ljjezbl }"
          />
        </div>
      </div>

      <!-- 订单 -->
      <div class="section">
        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#108ee9">订单</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.dd_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.dd_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.dd_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.dd_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">已交付</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.dd_yjf_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.dd_yjf_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.dd_yjf_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.dd_yjf_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#cd201f">应收账款</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.dd_yszk_dyfs || 0 }}</li>
              <li class="txt ellipsis">当月份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.dd_yszk_dyje || 0 }}</li>
              <li class="txt ellipsis">当月金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">累计份数</span>
              <span class="bold">{{ info.dd_yszk_ljfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">累计金额</span>
              <span class="bold">{{ info.dd_yszk_ljje || 0 }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 货款 -->
      <div class="section">
        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#108ee9">货款</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.hk_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.hk_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.hk_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.hk_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#16a6bc">回款</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.hk_hk_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.hk_hk_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.hk_hk_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.hk_hk_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#cd201f">逾期/应收未收款</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.hk_yq_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.hk_yq_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.hk_yq_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.hk_yq_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 库存 -->
      <div class="section">
        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#108ee9">库存</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.kc_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.kc_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.kc_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.kc_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>

        <div class="statistic-card">
          <a-row class="statistic-title">
            <a-tag color="#cd201f">呆滞</a-tag>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <file-outlined style="color: #0d4fd6" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.kc_dz_nljfs || 0 }}</li>
              <li class="txt ellipsis">年累计份数</li>
            </ul>
          </a-row>
          <a-row class="statistic-item" align="middle">
            <pay-circle-outlined style="color: green" />
            <ul class="ovh">
              <li class="num ellipsis">{{ info.kc_dz_nljje || 0 }}</li>
              <li class="txt ellipsis">年累计金额</li>
            </ul>
          </a-row>
          <a-divider />
          <ul class="statistic-box">
            <li>
              <span class="color-txt">当月新增份数</span>
              <span class="bold">{{ info.kc_dz_dyxzfs || 0 }}</span>
            </li>
            <li>
              <span class="color-txt">当月新增金额</span>
              <span class="bold">{{ info.kc_dz_dyxzje || 0 }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileOutlined, PayCircleOutlined } from '@ant-design/icons-vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const info = ref({})

onMounted(() => {
  getData()
})

const getData = async () => {
  const res = await axios.get('/api/xjkjReport/getData?pwd=xjkj20230224')
  info.value = JSON.parse(res.data)
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  .steps {
    display: flex;
    margin: 8px;
    background-color: #01092b;
    .step {
      flex: 1;
      line-height: 32px;
      text-align: center;
      background-size: 100% 100%;
      &:not(:first-child) {
        margin-left: 8px;
      }
      &:not(:last-child) {
        background-image: url('../assets/images/step-1.png');
      }
      &:last-child {
        background-image: url('../assets/images/step-3.png');
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    margin: 0 8px 8px;
  }
  .section {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #01092b;
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}
.statistic-card {
  padding: 10px;
  // background-color: #01092b;
  &:not(:last-child) {
    border-bottom: 8px solid #040f4a;
  }
}
.statistic-item {
  .num {
    font-weight: bold;
    line-height: 22px;
  }
  .txt {
    font-size: 12px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
  }
  & + .statistic-item {
    margin-top: 5px;
  }
}
.statistic-box {
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
  li {
    .color-txt {
      margin-right: 8px;
      color: #0d4fd6;
    }
    & + li {
      margin-top: 4px;
    }
  }
}
.statistic-title {
  margin-bottom: 8px;
}
.statistic-item + .statistic-title {
  padding-top: 8px;
}
</style>
