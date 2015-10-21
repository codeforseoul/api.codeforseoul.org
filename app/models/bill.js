import request from 'request';
import cheerio from 'cheerio';
import Iconv from 'iconv';
import jsdom from 'jsdom';
// import encoding from 'encoding';
var iconv = Iconv.Iconv;
iconv = new iconv('EUC-KR', 'UTF-8//TRANSLIT//IGNORE');

let bills = {
  /*
   *
   * return only full sponsors list with an array type
   *
  */
  get(id, callback) {
    let url = `http://likms.assembly.go.kr/bill/jsp/CoactorListPopup.jsp?bill_id=${id}`;
    request({
      uri: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:43.0) Gecko/20100101 Firefox/43.0'
      },
       encoding: 'binary'
    }, (err, res, body) => {
      body = new Buffer(body, 'binary');
      body = iconv.convert(body).toString();

      let $ = cheerio.load(body);
      let assemblies = $('td[width="10%"]');
      let result = [];

      
      Object.keys(assemblies).forEach(key => {
        if (assemblies[key].children && assemblies[key].children[0]) {
           result.push(assemblies[key].children[0].data);
         };
      });

      callback(null, result);
    });
  }
};

export default bills;
