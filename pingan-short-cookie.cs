using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args){
            Console.WriteLine("Hello World!");
            string cookie = "p=1;s={s:\"we\",q:1,ss:''};ss=";

            Console.WriteLine(cookie);
            string newCookie = "";
            string[] words = cookie.Split(';');
            foreach (string word in words)
            {
                if (word.IndexOf("{") > -1){
                    newCookie += modifyCookieByjson(word);
                } else {
                    newCookie += modifyCookieByString(word);
                }
            }
            newCookie = Regex.Replace(newCookie, @"\s", "");
            Console.WriteLine(newCookie);
            Console.ReadKey();
        }
        static String modifyCookieByjson(string str){
            String jsonStr = str.Split('=')[1];
            String tmp = str.Split('=')[0] ;
            JObject json = (JObject)JsonConvert.DeserializeObject(jsonStr);
            JObject newJson = new JObject();
            foreach (JProperty jProperty in json.Properties()) {
                String key = (String)jProperty.Name;
                String value = (String)jProperty.Value;
                if (value != "") {
                    newJson.Add(new JProperty(key, value));
                }
            }
            String newStr = newJson.ToString();
            if (newStr == "{}"){ return ""; }
            return tmp + "=" + newStr;
        }
        static String modifyCookieByString(string str){
            
            if (str.Split('=')[1].Replace(" ", "") == ""){
                return "";
            }
            return str +";";
        }
    }
}
