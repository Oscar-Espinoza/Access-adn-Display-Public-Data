function createTable(data){
    dataMembers = data.results[0].members;
            let keys = ['First name', 'Middle name', 'Last name', 'Party', 'State', 'Seniority', 'Votes with party pct'];
            let tableHead = "<tr>";
            let table = "";
            keys.forEach(key => {
                tableHead = tableHead + "<th>" + key + "</th>";
            })
    
            dataMembers.forEach(member => {
                if(member.middle_name == null){
                    member.middle_name = "";
                }
                let memberVotesPct = member.votes_with_party_pct.toString() + " %";
                let nameUrl  = "<a href='" + member.url + "' target='_blank'>" + member.first_name + "</a>";
    
                memberInfo = [nameUrl, member.middle_name, member.last_name, member.party, member.state, member.seniority, memberVotesPct];
    
                table = table + "<tr>";
                memberInfo.forEach(value => {
                    table = table + "<td>" + value + "</td>";
                });
                table = table + "</tr>";
            });
    
            table = tableHead + table;
            document.getElementById("senate-data").innerHTML = table;
}