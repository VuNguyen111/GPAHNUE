$(
    function getData () {
        fetch("https://sheet.best/api/sheets/ffadd399-ebfc-45c2-a8ab-87dfdfe68313")
          .then((res)=> {
            return res.json()
          })
          .then(response => {
            const keys = Object.keys(response[5]);
            const value = Object.values(response[5]);
            const length = Object.keys(response[5]).length;
            let arr = []; 
            for (let i = 0; i < length; i++) {
                if(i !==0) {
                    const abc = {
                        name: keys[i],
                        value: value[i],
                    };
                    arr = [...arr, abc];
                }
            }
            console.log('arr', arr.map(i=> i.value));
            const renderTable = arr.length > 0 && arr.map((item) => {
                return `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.value}</td>
                    </tr>`
            })
            document.querySelector('#divTest').innerHTML = `
                <table>
                    <tr> 
                        <th>Môn học</th>
                        <th>Điểm đánh giá</th>
                    </tr>
                    ${renderTable}                
                </table>`
          })
          .catch(err => console.log(err))
    }
)