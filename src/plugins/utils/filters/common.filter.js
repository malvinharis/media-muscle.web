import Vue from "vue";
import Vue2Filters from "vue2-filters";
import moment from "moment";
import _ from "lodash";

Vue.use(Vue2Filters);

Vue.filter("datetimeToDate", value => {
  if (_.isEmpty(value)) {
    return "";
  } else {
    return moment(value).format("DD MMM YYYY");
  }
});

Vue.filter("datetimeToDatetime", value => {
  if (_.isEmpty(value)) {
    return "";
  } else {
    return moment(value).format("DD MMM YYYY HH:mm");
  }
});
