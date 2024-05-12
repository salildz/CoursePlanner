import React, { Component } from "react";
import "./WeeklySchedule.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["Morning", "Afternoon"];

export default class WeeklySchedule2 extends Component {
  componentDidMount() {
    // Olay dinleyicisi componentDidMount içinde ekleniyor
    var button = document.getElementById("uploadFile");
    button.addEventListener("click", this.myFunction);
  }

  componentWillUnmount() {
    // Olay dinleyicisi componentWillUnmount içinde kaldırılıyor
    var button = document.getElementById("uploadFile");
    button.removeEventListener("click", this.myFunction);
  }


  render() {
    return (
      <table className="content-table">
        <thead>
        <h3>2. Class</h3>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th colSpan="2">1. Class</th>
            <th colSpan="2">2. Class</th>
            <th colSpan="2">3. Class</th>
            <th colSpan="2">4. Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="2">Monday</th>
            <td>Morning</td>
            <td id="1101">sa</td>
            <td id="1102">sa2</td>
            <td id="1103">sa3</td>
            <td id="1104">sa4</td>
            <td id="1105">sa5</td>
            <td id="1106">sa6</td>
            <td id="1107">sa7</td>
            <td id="1108">sa8</td>
          </tr>
          <tr>
            <td>Afternoon</td>
            <td id="1111"></td>
            <td id="1112"></td>
            <td id="1113"></td>
            <td id="1114"></td>
            <td id="1115"></td>
            <td id="1116"></td>
            <td id="1117"></td>
            <td id="1118"></td>
          </tr>
          <tr>
            <th rowSpan="2">Tuesday</th>
            <td>Morning</td>
            <td id="1201"></td>
            <td id="1202"></td>
            <td id="1203"></td>
            <td id="1204"></td>
            <td id="1205"></td>
            <td id="1206"></td>
            <td id="1207"></td>
            <td id="1208"></td>
          </tr>
          <tr>
            <td>Afternoon</td>
            <td id="1211"></td>
            <td id="1212"></td>
            <td id="1213"></td>
            <td id="1214"></td>
            <td id="1215"></td>
            <td id="1216"></td>
            <td id="1217"></td>
            <td id="1218"></td>
          </tr>
          <tr>
            <th rowSpan="2">Wednesday</th>
            <td>Morning</td>
            <td id="1301"></td>
            <td id="1302"></td>
            <td id="1303"></td>
            <td id="1304"></td>
            <td id="1305"></td>
            <td id="1306"></td>
            <td id="1307"></td>
            <td id="1308"></td>
          </tr>
          <tr>
            <td>Afternoon</td>
            <td id="1311"></td>
            <td id="1312"></td>
            <td id="1313"></td>
            <td id="1314"></td>
            <td id="1315"></td>
            <td id="1316"></td>
            <td id="1317"></td>
            <td id="1318"></td>
          </tr>
          <tr>
            <th rowSpan="2">Thursday</th>
            <td>Morning</td>
            <td id="1401"></td>
            <td id="1402"></td>
            <td id="1403"></td>
            <td id="1404"></td>
            <td id="1405"></td>
            <td id="1406"></td>
            <td id="1407"></td>
            <td id="1408"></td>
          </tr>
          <tr>
            <td>Afternoon</td>
            <td id="1411"></td>
            <td id="1412"></td>
            <td id="1413"></td>
            <td id="1414"></td>
            <td id="1415"></td>
            <td id="1416"></td>
            <td id="1417"></td>
            <td id="1418"></td>
          </tr>
          <tr>
            <th rowSpan="2">Friday</th>
            <td>Morning</td>
            <td id="1501"></td>
            <td id="1502"></td>
            <td id="1503"></td>
            <td id="1504"></td>
            <td id="1505"></td>
            <td id="1506"></td>
            <td id="1507"></td>
            <td id="1508"></td>
          </tr>
          <tr>
            <td>Afternoon</td>
            <td id="1501"></td>
            <td id="1502"></td>
            <td id="1503"></td>
            <td id="1504"></td>
            <td id="1505"></td>
            <td id="1506"></td>
            <td id="1507"></td>
            <td id="1508"></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
