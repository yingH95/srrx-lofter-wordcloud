<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info" style="z-index: 1">
            <b-navbar-brand href="#" style="font-size: medium">声入人心 Lofter词云 <small style="font-size: x-small">制作: 驼驼</small></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form class="mt-1">
                        <div class="text-light">请选择成员：</div>
                        <b-form-select class="my-2 my-sm-0" @change="changeMember"
                                       v-model="member" :options="members">
                        </b-form-select>
                    </b-nav-form>
                    <b-nav-form class="mt-1">
                        <b-form-select class="my-2 my-sm-0 ml-1" @change="changeViewMode"
                                       v-model="viewMode" :options="['词云', '列表']">
                        </b-form-select>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
  import members from '../assets/members'
  export default {
    name: "NavBar",
    data: function () {
      return {
        members,
        member: "声入人心",
        viewMode: "词云"
      }
    },
    methods: {
      changeMember: function () {
        this.$store.commit('changeMember', this.member);
        this.sendAnalytics()
      },
      sendAnalytics: function () {
        this.$ga.event({
          eventCategory: 'Change Member',
          eventAction: 'change',
          eventLabel: this.member
        })
      },
      changeViewMode: function () {
        this.$store.commit('changeMode', this.viewMode)
      }
    }
  }
</script>

<style scoped>

</style>