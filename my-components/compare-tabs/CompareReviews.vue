<script>
import CompareReviewsItem from './CompareReviewsItem.vue'

export default {
  components: { CompareReviewsItem },

  data() {
    return {
      CompareReviewsData: [
        {
          id: 1,
          fullName: 'Abduvali Rajabov',
          address: 'Toshkent, Yunusobod',
          time: '2 hafta oldin',
          description:
            'Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте Ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется.',
          workTime: 'Доставка выполняется ежедневно с 09:00 до 19:00 часов.',
        },
        {
          id: 2,
          fullName: 'Abduvali Rajabov',
          address: 'Toshkent, Yunusobod',
          time: '2 hafta oldin',
          description:
            'Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте Ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется.',
          workTime: 'Доставка выполняется ежедневно с 09:00 до 19:00 часов.',
        },
        {
          id: 3,
          fullName: 'Abduvali Rajabov',
          address: 'Toshkent, Yunusobod',
          time: '2 hafta oldin',
          description:
            'Внимание! Неправильно указанный номер телефона, неточный или неполный адрес могут привести к дополнительной задержке! Пожалуйста, внимательно проверяйте Ваши персональные данные при регистрации и оформлении заказа. Конфиденциальность ваших регистрационных данных гарантируется.',
          workTime: 'Доставка выполняется ежедневно с 09:00 до 19:00 часов.',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <compare-reviews-item
      v-for="item in CompareReviewsData"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<style></style>
