<template>
  <div class="main__trx">
    <div class="main__trx-background bg-gradient-primary"></div>
    <div class="main__trx-wrapper">
      <div class="main__trx-head">
        <div class="main__trx-title">
          <v-icon color="info" class="pr-2">mdi-information</v-icon>
          Make sure you check out the changes to your order
        </div>
      </div>
      <div class="main__trx-body">
        <div class="main__trx-cart">
          <div class="main__trx-cart__title">
            Shopping Cart
          </div>
          <div class="main__trx-cart__content">
            <div class="main__trx-cart__content-left">
              <div class="main__trx-cart__content-title">
                Total 1 Item
              </div>
              <div class="main__trx-cart__list">
                <div class="main__trx-cart__item">
                  <div class="main__trx-cart__image">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=1`"
                      :lazy-src="`https://picsum.photos/10/6?image=1`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                  <div class="main__trx-cart__body">
                    <div class="main__trx-cart__info">
                      <div class="main__trx-cart__label">
                        Program A
                      </div>
                      <div
                        class="main__trx-cart__label headline font-weight-bold pb-3"
                      >
                        Rp. 10.000.000
                      </div>
                      <div class="main__trx-cart__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi delectus doloremque dolor officia, dolorum a
                        omnis sequi iusto quis maxime repellat! Commodi beatae
                        fuga vel recusandae, voluptatum dolor! Tenetur, in.
                      </div>
                    </div>
                    <div class="main__trx-cart__action">
                      <v-btn text>Remove</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main__trx-cart__content-right">
              <div class="main__trx-cart__content-title">
                Order Summary
              </div>
              <div class="main__trx-cart__summary">
                <div class="main__trx-cart__label">
                  SUB TOTAL
                </div>
                <div class="main__trx-cart__body font-weight-bold">
                  Rp. 10.000.0000
                </div>
              </div>
              <div class="main__trx-cart__action">
                <v-btn color="success">Process to Order</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
