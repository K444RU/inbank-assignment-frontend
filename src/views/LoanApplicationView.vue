<template>
  <div>
    <Header/>
    <HeaderMain/>
    <div class="MainFlex">
      <div class="bg bg-man-holding-bicycle">
        <div class="container d-flex flex-column justify-content-center flex-grow-1 mt-4 mb-0 mt-md-0">
          <div class="row">
            <div class="col-12 col-md-7 col-xl-8 text-white"><h1 class="display-1">Small loan</h1></div>
          </div>
        </div>
        <div class="overlay-wrap__always-on">
          <div class="container padding-container">
            <div class="row">
              <div class="col text-white">
                Personal code
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                  </div>
                  <input v-model="decisionRequest.personalCode" type="number" class="form-control"
                         placeholder="personal code" aria-label="Username"
                         aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="col text-white">
                Amount
                <div class="input-group-prepend">
                </div>
                <input v-model="decisionRequest.loanAmount" type="number" class="form-control" placeholder="Loan amount"
                       aria-label="Username"
                       aria-describedby="basic-addon1">
              </div>
              <div class="col text-white">
                Period
                <div class="input-group-prepend">
                </div>
                <input v-model="decisionRequest.loanPeriod" type="number" class="form-control" placeholder="loan period"
                       aria-label="Username"
                       aria-describedby="basic-addon1">
              </div>
            </div>

          </div>
          <div class="container">
            <div class="row">
              <div v-for="error in errorResponse.errors" class="col">
                <AlertErrorMessage :message="error"/>
              </div>
              <div class="col">
                <AlertPositiveDecisionMessage :message="AlertPositiveDecisionMessage.message"/>
              </div>
              <div class="col">
                <button v-on:click="applyForNewLoan" id="apply-for-loan" type="button" class="btn btn-light">Apply for
                  loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";
import AlertErrorMessage from "@/components/AlertErrorMessage";
import AlertPositiveDecisionMessage from "@/components/AlertPositiveDecisionMessage";

export default {
  name: "LoanApplicationView.vue",
  components: {HeaderMain, Header, AlertErrorMessage, AlertPositiveDecisionMessage},

  data: function () {
    return {
      decisionRequest: {
        personalCode: '',
        loanAmount: 0,
        loanPeriod: 0,
      },
      errorResponse: {
        errors: []
      },
      AlertPositiveDecisionMessage: {
        message: ''
      },
      decisionResponse: {
        decision: '',
        approvedAmount: 0,
        approvedPeriod: 0,
        decisionDescription: ''
      }

    }
  }, methods: {


    applyForNewLoan: function () {
      this.errorResponse.errors = []
      this.AlertPositiveDecisionMessage.message = ''
      if (this.decisionRequest.personalCode === 0 || this.decisionRequest.loanAmount === 0 ||
          this.decisionRequest.loanPeriod === 0) {
        this.errorResponse.errors.push('Fill in all fields')
      } else if ((this.decisionRequest.loanAmount < 2000 || this.decisionRequest.loanAmount > 10000) ||
          (this.decisionRequest.loanPeriod < 12 || this.decisionRequest.loanPeriod > 60)) {
        if (this.decisionRequest.loanAmount < 2000 || this.decisionRequest.loanAmount > 10000) {
          this.errorResponse.errors.push('The minimum amount that can be requested is 2000 EUR and ' +
              'the maximum amount is 10000 EUR')
        }
        if (this.decisionRequest.loanPeriod < 12 || this.decisionRequest.loanPeriod > 60) {
          this.errorResponse.errors.push('The minimum loan period that can be applied for is 12 months ' +
              'and the maximum period is 60 months')
        }
      } else {
        this.$http.get("api/loan/decision", {
              params: {
                personalCode: this.decisionRequest.personalCode,
                loanAmount: this.decisionRequest.loanAmount,
                loanPeriod: this.decisionRequest.loanPeriod
              }
            }
        ).then(response => {
          this.decisionRequest = response.data;
          this.decisionResponse = response.data;
          if (this.decisionResponse.decisionDescription == "Positive"){
            this.AlertPositiveDecisionMessage.message = 'Your approved loan amount is '
                + this.decisionResponse.approvedAmount + ' EUR, and Your approved loan period is '
                + this.decisionResponse.approvedPeriod + ' months.'
          } else if(this.decisionResponse.decisionDescription == "Negative, person has debt"){
            this.errorResponse.errors.push('Negative decision. Person has debt')
          } else {
            this.errorResponse.errors.push('Negative decision')
          }



        }).catch(error => {
          this.errorResponse = error.response.data


        })

      }
    },

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Permanent+Marker&display=swap');

</style>