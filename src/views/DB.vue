<template>
  <div class="about">
    <h1>This is an about page</h1>
      <table>
        <caption>고객 리스트</caption>
        <colgroup>
          <col style="width: 2%;"> <!-- No -->
          <col style="width: 7%;"> <!-- 고객명 -->
          <col style="width: 4%;"> <!-- 연령 -->
          <col style="width: 10%;"> <!-- 휴대폰 -->
          <col style="width: 8%;"> <!-- 유입경로 -->
          <col style="width: 4%;"> <!-- 요청유형 -->
          <col style="width: 10%;"> <!-- 최초상담 -->
          <col style="width: 10%;"> <!-- 최종상담 -->
          <col style="width: 6%;"> <!-- 총상담회차 -->
          <col style="width: 7%;"> <!-- 담당매니저 -->
          <col style="width: 8%;"> <!-- 상태 -->
          <col style="width: 5%;"> <!-- 상담상태 -->
          <col style="width: 5%;"> <!-- 상담단계 -->
        </colgroup>
        <thead>
          <tr>
            <th scope="col"><span>No.</span></th>
            <th scope="col"><span>고객명</span></th>
            <th scope="col"><span>연령</span></th>
            <th scope="col"><span>휴대폰</span></th>
            <th scope="col"><span>유입경로</span></th>
            <th scope="col"><span>유형</span></th>
            <th scope="col"><span>최초상담</span></th>
            <th scope="col"><span>최종상담</span></th>
            <th scope="col"><span>총상담회차</span></th>
            <th scope="col"><span>담당매니저</span></th>
            <th scope="col"><span>상태</span></th>
            <th scope="col"><span>상담상태</span></th>
            <th scope="col"><span>상담단계</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in customers.content" :key="index">
            <td><span>{{ customers.totalElements - (index + (searchForm.page * searchForm.size)) }}</span></td>
            <td><span>{{ item.name }}</span></td>
            <td><span>{{ item.age }}</span></td>
            <td><span>{{ item.phoneNumber  }}</span></td>
            <td><span>{{ item.flowInType1 }}</span></td>
            <td><span>{{ item.requestType }}</span></td>
            <td><span>{{ item.consultCnt }}</span></td>
            <td><span>{{ item.consultDate }}</span></td>
            <td><span>{{ item.consultLastDate }}</span></td>
            <td><span>{{ item.managerEmployee != null ? item.managerEmployee.name : '' }}</span></td>
            <td><span>{{ item.distributionStatusPretty }}</span></td>
            <td><span>{{ item.consultStatusPretty }}</span></td>
            <td><span>{{ item.consultStagePretty }}</span></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "DB",
  data () {
    return {
      adminAuth: false,
      searchForm: {
        page: 0,
        size: 10,
        customerName: '',
        searchEmployeeName: '',
        flowInType: '',
        familyIncluded: false,
        sort: 'createdTime,desc',
        distributionStatus: 'distribution,direct'
      },
      customers: {},
      customerId: '',
      monthStatistics: {},
    }
  },
  created() {
    this.getRefineList();
  },
  methods: {
    getRefineList () {
      const apiURL = `${this.ENV_CRM}/request-refine`
      const params = {
        page: 0,
        size: 10,
        customerName : '',
        searchEmployeeName: '',
        flowInType: '',
        familyIncluded: false,
        sort: 'createdTime,desc',
        distributionStatus: 'distribution,direct'
      }
      this.$http({
        method: 'get',
        url: apiURL,
        params
      }).then(result => {
        result.data.content.forEach(item => {
          item.age = this.getCustomerManAge(item.birthDay)
        })
        this.customers = result.data
      }).catch(error => {
        console.error(error)
      })
    },
    getCustomerManAge (birthDate) {
      if (!birthDate) return '-'
      const birthday = new Date(birthDate)
      const today = new Date()
      let years = today.getFullYear() - birthday.getFullYear()

      birthday.setFullYear(today.getFullYear())

      if (today < birthday) {
        years--
      }

      if (years >= 0 && years < 200) {
        return years
      } else {
        return '-'
      }
    },
  }
};
</script>

<style scoped>
table {
  width: 100%
}
</style>