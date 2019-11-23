/**

 * @supported 68F7E880141E

 */

let obj = JSON.parse($response.body);
obj["result"]["user_status"]["vip"] = 1;
$done({body: JSON.stringify(obj)});
