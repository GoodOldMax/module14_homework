const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const obj = {list: []};

xmlDOM.querySelectorAll('list student').forEach(student => {
    obj.list.push({
        name: `${student.querySelector('name first').textContent} ${student.querySelector('name second').textContent}`,
        age: Number(student.querySelector('age').textContent),
        prof: student.querySelector('prof').textContent,
        lang: student.querySelector('name').getAttribute('lang'),
    });
});

console.log(obj);
