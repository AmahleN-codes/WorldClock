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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">
            ${cityTime.format("MMMM do, YYYY")}
            </div>
          </div>
          <div class="time">
          ${cityTime.format("hh:mm:ss ")}<small>${cityTime.format("A")}</small>
            </div>`;
}
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
