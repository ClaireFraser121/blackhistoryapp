import axios from "axios";
import Papa from 'papaparse';

export default {
    getQuizQuestions: function() {
    
    return Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQIuvyzMCv-41hAAhDwH79Gv9G0D6iJ9Fdt1e7pV2-QLZQwwOR9tLgTcLHXz6K8eRakhIiWdtANwgvJ/pub?output=csv', {
        download: true,
        header: true,
        complete: function(results) {
          var data = results.data
          console.log(data)
        }
      });
      }
    }
    //   getBooks: function() {
    //     return Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQIuvyzMCv-41hAAhDwH79Gv9G0D6iJ9Fdt1e7pV2-QLZQwwOR9tLgTcLHXz6K8eRakhIiWdtANwgvJ/pub?output=csv', {
    //         download: true,
    //         header: true,
    //         complete: function(results) {
    //           var data = results.data
    //           console.log(data)
    //         }
    //       })
    //       }
    // };