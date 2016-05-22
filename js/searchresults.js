       var config = {
        '.chosen-select'           : {},
        '.chosen-select-deselect'  : {allow_single_deselect:true},
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

        var url = 'http://content.guardianapis.com/search?section=global-development&page-size=20&q=' + $('#country').val() + '&api-key=test';

        var searchData = $.get(url, function(results){

          if(results.response.total == 0) {
            alert('Could not find any content.');

          } else {
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][0]['webUrl'] + '" target="_blank"> ' + results['response']['results'][0]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][1]['webUrl'] + '" target="_blank"> ' + results['response']['results'][1]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][2]['webUrl'] + '" target="_blank"> ' + results['response']['results'][2]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][3]['webUrl'] + '" target="_blank"> ' + results['response']['results'][3]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][4]['webUrl'] + '" target="_blank"> ' + results['response']['results'][4]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][5]['webUrl'] + '" target="_blank"> ' + results['response']['results'][5]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][6]['webUrl'] + '" target="_blank"> ' + results['response']['results'][6]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][7]['webUrl'] + '" target="_blank"> ' + results['response']['results'][7]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][8]['webUrl'] + '" target="_blank"> ' + results['response']['results'][8]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][9]['webUrl'] + '" target="_blank"> ' + results['response']['results'][9]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][10]['webUrl'] + '" target="_blank"> ' + results['response']['results'][10]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][11]['webUrl'] + '" target="_blank"> ' + results['response']['results'][11]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][12]['webUrl'] + '" target="_blank"> ' + results['response']['results'][12]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][13]['webUrl'] + '" target="_blank"> ' + results['response']['results'][13]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][14]['webUrl'] + '" target="_blank"> ' + results['response']['results'][14]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][15]['webUrl'] + '" target="_blank"> ' + results['response']['results'][15]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][16]['webUrl'] + '" target="_blank"> ' + results['response']['results'][16]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][17]['webUrl'] + '" target="_blank"> ' + results['response']['results'][17]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][18]['webUrl'] + '" target="_blank"> ' + results['response']['results'][18]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
            $('<article class="summary"><section class="title"><a href=" ' + results['response']['results'][19]['webUrl'] + '" target="_blank"> ' + results['response']['results'][19]['webTitle'] + '</a></p></strong></article>').appendTo('.article-container');
          }

        })
      })
    });