       var config = {
        '.chosen-select'           : {},
        '.chosen-select-deselect'  : {allow_single_deselect:false},
        '.chosen-select-no-single' : {disable_search_threshold:10},
        '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
        '.chosen-select-width'     : {width:"95%"}
      }
      for (var selector in config) {
        $(selector).chosen(config[selector]);
      };

    $(document).ready(function(){
      $('#article-search').on('submit', function(e){
        e.preventDefault();

        //remove results first
        $('.summary').remove()

          var request = 'http://content.guardianapis.com/search?section=global-development&page-size=20&q=' + $('#country').val() + '&api-key=test';

          $.ajax({
            cache: false,
            dataType: "json", // or "jsonp" if we enabled it
            url: request,
            success: function(articleresults) {
              for (var i = 0; i < articleresults.response.results.length; i++) {
                    $('<article class="summary"><section class="title"><a href=" ' + articleresults.response.results[i].webUrl + '" target="_blank"> ' + articleresults.response.results[i].webTitle + '</a></p></strong></article>').appendTo('.article-container');
              };
            },
            error: function(xhr, status, error) {}
          })

      })
    });