function updateTime() {
  //Joburg data
  let joburgElement = document.querySelector("#joburg");
  let joburgDateElement = joburgElement.querySelector("#joburg .date");
  let joburgTimeElement = joburgElement.querySelector("#joburg .time");
  let joburgTime = moment().tz("Africa/Johannesburg");
  joburgDateElement.innerHTML = joburgTime.format("MMMM do, YYYY");
  joburgTimeElement.innerHTML = joburgTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Los Angeles data
  let losAngelesElement = document.querySelector("#la");
  let losAngelesDateElement = losAngelesElement.querySelector("#la .date");
  let losAngelesTimeElement = losAngelesElement.querySelector("#la .time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
