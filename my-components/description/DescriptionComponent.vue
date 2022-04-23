
<script>
import { CThemeProvider, CBox, CHeading } from '@chakra-ui/vue'
export default {
  // name:"descriptions"
  components: {
    CThemeProvider,
    CBox,
    CHeading,
  },
}
</script>

<template>
  <CThemeProvider>
    <c-box
      :mt="['25px', '45px', '50px', '97px']"
      :justify-content="['center', 'center', 'space-between', 'space-between']"
      :flex-direction="['column', 'column', 'row', 'row']"
      :align-items="['center', 'center', 'start', 'start']"
      :display="['none', 'flex', 'flex', 'flex']"
    >
      <c-box width="50%" :mr="['0px', '0px', '20px', '30px']">
        <c-heading
          :width="['initial', 'initial', '230px', '230px']"
          font-family="Yandex Sans Display"
          font-size="24px"
          font-weight="700"
          font-style="normal"
          line-height="24px"
          >Интернет магазин - ArzonBizda</c-heading
        >
        <c-heading
          font-family="Yandex Sans Display"
          font-size="16px"
          color="color.TextColor2"
          font-weight="400"
          font-style="normal"
          line-height="24px"
          mt="8px"
          >Удобный онлайн гипермаркет для покупок</c-heading
        >
        <c-text
          font-family="Yandex Sans Display"
          font-size="16px"
          font-weight="300"
          font-style="normal"
          line-height="24px"

          color="color.TextColor1"
          :mt="['3px', '3px', '16px', '16px']"
          >Комфортную жизнь любого человека и удобный быт невозможно представить
          без современной техники. Рабочие и личные вопросы - в смартфоне,
          любимые фильмы и сериалы – телевизор, уборка – пылесос, готовка –
          плита, духовка и множество более мелких, но не менее полезных
          девайсов. Кроме того, технологии развиваются, а поэтому электроника
          требует регулярного обновления, хочется испытать новые модели или
          попросту не хватает мощности имеющихся девайсов. В связи с этим
          полезно иметь надежное место для покупки бытовой техники. Если Вы пока
          такового для себя не нашли, мы приглашаем на несколько минут
          задержаться на нашем сайте. Уверяем, Вы убедитесь, что не зря
          потратили свое время.</c-text
        >
      </c-box>
      <c-box width="50%" :mt="['15px', '20px', '30px', '60px']">
        <c-heading
          font-family="Yandex Sans Display"
          font-size="16px"
          color="color.TextColor2"
          font-weight="400"
          font-style="normal"
          line-height="24px"
          >Покупки в интернет-магазине – быстро, удобно, безопасно</c-heading
        >
        <c-text
          font-family="Yandex Sans Display"
          font-size="16px"
          font-weight="300"
          font-style="normal"
          line-height="24px"
          color="color.TextColor1"
          :mt="['3px', '3px', '15px', '15px']"
          >Arzonbizda.uz – это компания, которая с 2022 года на рынке, но опыт
          сотрудников в этой сфере достигает 16 лет. Мы работаем с хорошими
          брендами техники разного ценового сегмента и каждому клиенту сможем
          предложить вариант на его бюджет. Удобство онлайн-покупок для Вас
          сопровождается и финансовыми выгодами такого формата работы. Экономьте
          и покупайте надежные товары в несколько кликов. Будем рады
          проконсультировать.</c-text
        >
      </c-box>
      <c-box>
        <c-text></c-text>
      </c-box>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
