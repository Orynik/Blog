import Article from "@/models/Article"
import Categories from "@/models/Categories"

export default{
    getArticles(){
        const items = [
            {
                id: 1, title: "Vue.JS blog",content: "<p>В частности, понимание сути ресурсосберегающих технологий требует от нас анализа вывода текущих активов. Представители современных социальных резервов объединены в целые кластеры себе подобных. Учитывая ключевые сценарии поведения, социально-экономическое развитие создаёт предпосылки для кластеризации усилий. Диаграммы связей набирают популярность среди определенных слоев населения, а значит, должны быть разоблачены.</p><p>В своём стремлении повысить качество жизни, они забывают, что внедрение современных методик играет определяющее значение для своевременного выполнения сверхзадачи. Мы вынуждены отталкиваться от того, что укрепление и развитие внутренней структуры создаёт предпосылки для инновационных методов управления процессами.</p><p>Имеется спорная точка зрения, гласящая примерно следующее: диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы социально-демократической анафеме. Мы вынуждены отталкиваться от того, что семантический разбор внешних противодействий играет важную роль в формировании распределения внутренних резервов и ресурсов. А также непосредственные участники технического прогресса могут быть функционально разнесены на независимые элементы. Приятно, граждане, наблюдать, как многие известные личности описаны максимально подробно. Как уже неоднократно упомянуто, интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Прежде всего, экономическая повестка сегодняшнего дня требует определения и уточнения своевременного выполнения сверхзадачи.</p>", date: "2020-03-02"
            },
            {
                id: 2, title: "Golang API",content: "qweqweqweqwewqewqeqw",  date: "2020-03-01"
            },
            {
                id: 3, title: "RestApi",content: "qweqweqweqwewqewqeqw", date: "2020-01-01"
            },
            {
                id: 4, title: ".Net",content: "qweqweqweqwewqewqeqw",  date: "2019-03-27"
            },
            {
                id: 5, title: "React",content: "qweqweqweqwewqewqeqw",  date: "2020-03-01"
            },
            {
                id: 6, title: "Angular",content: "qweqweqweqwewqewqeqw",  date: "2019-10-26"
            },
            {
                id: 7, title: "QWEs",content: "<p>Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности напрямую зависит от экономической целесообразности принимаемых решений. Таким образом, курс на социально-ориентированный национальный проект в значительной степени обусловливает важность существующих финансовых и административных условий. Прежде всего, синтетическое тестирование выявляет срочную потребность приоритизации разума над эмоциями.</p><p>А также диаграммы связей будут описаны максимально подробно. В своём стремлении улучшить пользовательский опыт мы упускаем, что реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы.</p><p>Современные технологии достигли такого уровня, что понимание сути ресурсосберегающих технологий прекрасно подходит для реализации кластеризации усилий. В рамках спецификации современных стандартов, акционеры крупнейших компаний и по сей день остаются уделом либералов, которые жаждут быть ассоциативно распределены по отраслям. В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности говорит о возможностях первоочередных требований. Также как базовый вектор развития выявляет срочную потребность системы массового участия. Предварительные выводы неутешительны: высокое качество позиционных исследований предопределяет высокую востребованность существующих финансовых и административных условий. Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы разоблачены.</p><p>В целом, конечно, глубокий уровень погружения не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности. И нет сомнений, что диаграммы связей неоднозначны и будут представлены в исключительно положительном свете. Следует отметить, что высококачественный прототип будущего проекта позволяет выполнить важные задания по разработке вывода текущих активов. Современные технологии достигли такого уровня, что высокое качество позиционных исследований играет важную роль в формировании поставленных обществом задач.</p><p>Кстати, многие известные личности указаны как претенденты на роль ключевых факторов. Есть над чем задуматься: явные признаки победы институционализации разоблачены. Предварительные выводы неутешительны: высокотехнологичная концепция общественного уклада способствует повышению качества глубокомысленных рассуждений.</p>",  date: ""
            },
        ];
        return items.map((item) =>{
            const article = Article.createForm(item);
            return article;
        })
    },
    getCategories(){
        const items = [
            {
                name: "DevOps"
            },
            {
                name: "Frontend"
            },
            {
                name: "Backend"
            },
            {
                name: "C#"
            },
            {
                name: "Golang"
            },
            {
                name: "JavaScript"
            },
            {
                name: "Angular"
            }
        ];
        return items.map((item) =>{
            const name = Categories.createCategories(item);
            return name;
        })
    }
}