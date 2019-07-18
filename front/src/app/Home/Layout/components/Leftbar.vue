<template lang='pug'>
  .leftbar
    v-navigation-drawer(
      v-model="drawer"
      :mini-variant="mini"
      hide-overlay
      stateless
    )
      v-list(two-line)
        v-list-tile
          v-list-tile-action
            v-icon(@click="mini = !mini") menu
          v-list-tile-content
            displays-text.text-truncate(
              :text="user.name"
              type="title"
              weight="regular"
              color="black"
            )
            displays-text.text-truncate(
              :text="user.email"
              type="subheading"
              weight="light"
              color="lightgrey"
              )
        v-divider
        v-list-tile(
          v-for="(item, index) in items"
          :key="index"
        )
          v-list-tile-action
            v-icon(@click="goTo(item)") {{ item.icon }}
          v-list-tile-content
            v-list-tile-title.pointer.title.font-weight-light(
              v-if="item.children.length < 1"
              @click="goTo(item)"
            ) {{ item.title }}
            v-menu(
              v-else
              offset-y
              min-width="220"
              transition="slide-y-transition"
            )
              v-list-tile-title.title.font-weight-light(slot="activator") {{ item.title }}
              v-list(
                v-if="item.children.length > 0"
                v-for="(child, index) in item.children"
                :key="index"
              )
                v-list-tile(@click="goTo(child)")
                  v-list-tile-title.title.font-weight-light {{ child.title }}
</template>

<script>
import DisplaysText from 'Support/components/pages/DisplaysText.vue';
import Items from './items';

export default {
  name: 'Leftbar',
  components: {
    DisplaysText,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      user: {
        name: '',
        email: '',
      },
      items: Items,
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.user.name = 'João da Silva Santos';
      this.user.email = 'joao.santos@gusgo.com.br';
    },
    goTo(item) {
      this.mini = true;
      this.$router.push({ name: item.route });
    },
  },
};
</script>

<style lang="sass" scoped>
  .leftbar
    height: 100%
</style>
