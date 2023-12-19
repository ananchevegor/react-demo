import  React, {useEffect, useState} from "react";


function Results() {
    return(
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Подход(утро)</th>
                    <th>Угол сгибания(утро)</th>
                    <th>Подход 2(вечер)</th>
                    <th>Угол сгибания(вечер)</th>
                </tr>
            </thead>
        </table>
    )
}

export default Results;