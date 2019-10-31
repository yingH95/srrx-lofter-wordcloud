<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-brand href="#">声入人心 Lofter词云</b-navbar-brand>
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
        member: "阿云嘎"
      }
    },
    methods: {
      changeMember: function () {
        this.$store.commit('changeMember', this.member)
      }
    }
  }
</script>

<style scoped>

</style>