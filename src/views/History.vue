<template>
  <div class="main__trx">
    <div class="main__trx-background bg-gradient-primary"></div>
    <div class="main__trx-wrapper">
      <div class="main__trx-body">
        <div class="main__trx-cart">
          <div class="main__trx-cart__title">
            Your Order History
          </div>
          <div class="main__trx-history">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <div class="main__trx-history__header">
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Invoice
                      </div>
                      <div class="main__trx-history__content">
                        8123123718123
                      </div>
                    </div>
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Status
                      </div>
                      <div class="main__trx-history__content">
                        On Progress
                      </div>
                    </div>
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Transaction Date
                      </div>
                      <div class="main__trx-history__content">
                        20 May 2020
                      </div>
                    </div>
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Total Price
                      </div>
                      <div class="main__trx-history__content">
                        Rp. 10.000.000
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi delectus doloremque dolor officia,
                            dolorum a omnis sequi iusto quis maxime repellat!
                            Commodi beatae fuga vel recusandae, voluptatum
                            dolor! Tenetur, in.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <div class="main__trx-history__header">
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Invoice
                      </div>
                      <div class="main__trx-history__content">
                        7127312361823
                      </div>
                    </div>
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Status
                      </div>
                      <div class="main__trx-history__content">
                        Done
                      </div>
                    </div>
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Transaction Date
                      </div>
                      <div class="main__trx-history__content">
                        18 May 2020
                      </div>
                    </div>
                    <div class="main__trx-history__header-item">
                      <div class="main__trx-history__label">
                        Total Price
                      </div>
                      <div class="main__trx-history__content">
                        Rp. 30.000.000
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
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
                            Rp. 15.000.000
                          </div>
                          <div class="main__trx-cart__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi delectus doloremque dolor officia,
                            dolorum a omnis sequi iusto quis maxime repellat!
                            Commodi beatae fuga vel recusandae, voluptatum
                            dolor! Tenetur, in.
                          </div>
                        </div>
                      </div>
                    </div>
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
                            Program B
                          </div>
                          <div
                            class="main__trx-cart__label headline font-weight-bold pb-3"
                          >
                            Rp. 15.000.000
                          </div>
                          <div class="main__trx-cart__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi delectus doloremque dolor officia,
                            dolorum a omnis sequi iusto quis maxime repellat!
                            Commodi beatae fuga vel recusandae, voluptatum
                            dolor! Tenetur, in.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
