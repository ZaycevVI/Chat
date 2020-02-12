import moment from "moment";

export const getDateForPreview = date => {
  var end = moment(new Date());
  var start = moment(date);
  return end.diff(start, "days") >= 1
    ? start.format("DD.MM.YYYY")
    : start.format("HH:mm");
};

export const toTime = seconds => {
  return moment()
    .startOf("day")
    .seconds(seconds)
    .format("mm:ss");
}

export const getDateForMsg = date => moment(date).fromNow();
