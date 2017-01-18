;(function () {
    ;

// t: current time, b: begInnIng value, c: change In value, d: duration
    jQuery.easing['jswing'] = jQuery.easing['swing'];

    jQuery.extend( jQuery.easing,
        {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c*(t/=d)*t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c*(t/=d)*t*t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
                return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
        });

    ;// Baseline setup
// --------------

// Establish the root object `window`.
    var root = this

// Create a safe reference to the UW object which will be used to establish the global UW object.
    var UW = function(obj)
    {
        if ( obj instanceof UW ) return obj

        if ( ! ( this instanceof UW )) return new UW(obj)

        this._wrapped = obj
    };

// Establish the global UW object `window.UW`
    root.UW = UW


// Current version
    UW.VERSION = '0.1'
    ;// List out the classes that each component searches for
    UW.elements = {

        alert : '.uw-thinstrip',
        accordion  : '.uw-accordion',
        dropdowns  : '#dawgdrops',
        images : 'a > img',
        mobilemenu : '.uw-mobile-menu-toggle',
        radio      : ':radio',
        search     : '.uw-search',
        select     : '.uw-select',
        quicklinks : '.uw-quicklinks',
        slideshow  : '.uw-slideshow',
        social     : '.uw-social',
        vimeo      : '.uw-vimeo',
        youtube    : '.uw-youtube'

    }

    if (typeof(uw) !== 'undefined') {
        UW.baseUrl = uw.siteUrl;
    }
    else {
        UW.baseUrl = Backbone.history.location.origin + '/' +
            _.first( _.compact( Backbone.history.location.pathname.split('/') ) ) + '/';
    }

    UW.sources = {
        quicklinks :  'vendor/uwdoem/admissions/assets/quicklinks.json',
        search     : UW.baseUrl + 'wp-admin/admin-ajax.php'
    }

// Initialize all components when the DOM is ready
    UW.initialize = function( $ )
    {
        // Cache common elements that each javascript module calls
        UW.$body       = jQuery('body');
        UW.$window   = jQuery( window );

        // UW Utilities
        UW.dropdowns  = _.map( jQuery( UW.elements.dropdowns ),     function( element ) { return new UW.Dropdowns({ el : element }) } )
        UW.mobilemenu = _.map( jQuery( UW.elements.mobilemenu ),     function( element ) { return new UW.MobileMenu({ el : element }) } )
        UW.quicklinks = _.map( jQuery( UW.elements.quicklinks ),    function( element ) { return new UW.QuickLinks( { el : element, url : UW.sources.quicklinks }) } )
        UW.search     = _.map( jQuery( UW.elements.search ),    function( element ) { return new UW.Search( { el : element, model : new UW.Search.DirectoryModel( {url: UW.sources.search}) }) } )
        UW.images   = _.map( jQuery( UW.elements.images ),    function( element ) { return new UW.Image({ el : element }) } )

        // UW Modules
        UW.slideshows = _.map( jQuery( UW.elements.slideshow ), function( element ) { return new UW.Slideshow( { el : element }) } )
        UW.social     = _.map( jQuery( UW.elements.social ),    function( element ) { return new UW.Social({ el : element }) } )
        UW.vimeo      = _.map( jQuery( UW.elements.vimeo ),     function( element ) { return new UW.Vimeo({ el : element }) } )
        UW.youtube    = _.map( jQuery( UW.elements.youtube ),   function( element ) { return new UW.YouTube.Collection({ el: element})})


        // UW Components - These need to render after all other javascript elements are rendered on page
        UW.accordion  = _.map( jQuery( UW.elements.accordion ), function( element ) { return new UW.Accordion( { el : element }) } )
        UW.radio      = _.map( jQuery( UW.elements.radio ),     function( element ) { return new UW.Radio({ el : element }) } )
        UW.select     = _.map( jQuery( UW.elements.select ),    function( element ) { return new UW.Select({ el : element }) } )

        //UW.alert = new UW.Alert({ after: UW.elements.alert, model: new UW.Alert.Model() });

        // todo: add to separate file
        jQuery('table').addClass('table table-striped')

        jQuery('pre').addClass('prettyprint')

        if ( window.prettyPrint ) prettyPrint()

    }

    jQuery(document).ready( UW.initialize )


// Basic UW Components
// --------------
    ;UW.Alert = Backbone.View.extend({

        alert : '#uwalert-alert-message',

        events : {
            'click .close' : 'hide'
        },

        template : '<div id="uwalert-alert-message" class="<% _.each( categories, function( category ) { %> <%= category.slug %> <% }) %>"><div class="container"><span class="close">Close</span><h1><%= title %></h1><p><%= excerpt %><a class="more" href="http://emergency.uw.edu" title="<%= title %>">More info</a></p></div></div>',

        initialize  : function( options )
        {
            _.bindAll( this, 'render', 'hide' )
            this.options = _.extend( {}, options )
            this.model.on( 'sync', this.render )
        },

        render : function()
        {
            if ( this.model.get('title'))
            {
                jQuery(this.options.after).after( _.template( this.template, this.model.toJSON() ) )
                this.setElement( jQuery( this.alert ) )
            }
        },

        hide : function()
        {
            this.$el.remove()
        }

    })

    UW.Alert.Model = Backbone.Model.extend({

        alerts :  [
            'red-alert-urgent',
            'orange-alert',
            'steel-alert-fyis',
        ],

        data  : {
            c : '?',
            test : true,
            number:1,
            type:'post',
            status:'publish',
            dataType: 'json'
        },

        url : Backbone.history.location.protocol + '//public-api.wordpress.com/rest/v1/sites/uwemergency.wordpress.com/posts/',

        initialize : function()
        {
            this.fetch( { data : this.data })
        },

        parse: function(data)
        {
            var post = _.first( data.posts )
            _.extend( post.categories, {alert: { slug : window.location.hash.replace('#','') } } )
            if ( _.intersection( _.pluck(  post.categories, 'slug' ), this.alerts ).length || post.categories.alert.slug.indexOf( 'uwalert' ) !== -1 )
                return post
        }

    });;// ### UW Search

// This function creates a UW Search
// For usage please refer to the [UW Web Components Search](http://uw.edu/brand/web/#search)

    UW.Search = Backbone.View.extend({

        // This property caches the current value in the search field so the same search doesn't execute multiple times.
        value : '',

        // These are the three search options: the UW, the current site and the directory
        searchFeatures : {
            uw        : 'uw',
            site      : 'site',
            directory : 'directory'
        },

        // This is the HTML for the search bar that is preprended to the body tag.
        searchbar : '<div id="uwsearcharea" class="uw-search-bar-container">'+
        '<div class="container no-height">'+
        '<div class="center-block uw-search-wrapper">'+
        '<form class="uw-search" action="<%= UW.baseUrl %>">'+

        '<input id="uw-search-bar" type="search" name="s" value="" autocomplete="off" tabindex="-1"/>'+
        '</form>'+

        '<select id="mobile-search-select" class="visible-xs">' +
        '<option value="site" selected>Current site</option>' +
        '<option value="uw">All the UW</option>' +
        '</select>' +

        '<button class="search" tabindex="-1"/>'+

        '<div class="labels hidden-xs">'+

        '<label class="radio">'+
        '<input type="radio" name="search" value="site" data-toggle="radio" checked tabindex="-1">'+
        'Undergraduate<br/> Admissions'+
        '</label>'+

        '<label class="radio">'+
        '<input type="radio" name="search" value="uw" data-toggle="radio" tabindex="-1">'+
        'All the UW'+
        '</label>'+

        //   '<label class="radio">'+
        //     '<input type="radio" name="search" value="directory" data-toggle="radio" tabindex="-1">'+
        //     'People Directory'+
        //   '</label>'+
        // '</div>'+

        '</div>'+
        '</div>'+
        '<div class="uw-results center-block" style="display:none;">' +
        '<p class="more-results" style="display:none;">Need more results? Try the <a href="http://www.washington.edu/directory/" title="Full directory">full directory</a></p>' +
        '</div>' +
        '</div>',

        // The HTML template for a single search result. Only the information that is available will be shown.
        result :  '<div class="result">' +
        '<h4 class="commonname"><%= commonname %></h4>'+
        '<a href="#" title="<%= commonname %>" class="directory-more">More</a>'+
        '<div class="information hidden">'+
        '<p class="pull-left"><% if ( title ) { %><span class="title"><%= title %></span><% } %>'+
        '<% if ( postaladdress ) { %><span class="postaladdress"><%= postaladdress %></span><% } %></p>'+
        '<% if ( mail ) { %><span class="mail">'+
        '<% _.each( mail, function( email, index ) { %>' +
        '<a href="mailto:<%= email %>" title="Email <%= commonname %>"><%= email %></a>'+
        '<% if ( index != mail.length ) { %>, <% } %>' +
        '<% }) %>'+
        '</span> <% } %>' +

        '<% if ( telephonenumber ) { %>' +
        '<span class="telephonenumber">'+
        '<% _.each( telephonenumber, function( telephone, index ) { %>' +
        '<a href="tel:<%= telephone %>"><%= telephone %></a>' +
        '<% if ( index != telephonenumber.length ) { %>, <% } %>' +
        '<% }) %>'+
        '</span>'+
        '<% } %>'+
        '</div>'+
        '</div>',

        // Default values. The `limit` refers to the minimum number characters needed before an ajax search is performed.
        defaults :
        {
            limit : 2
        },

        // List of events
        // A keydown on the input field will trigger an ajax search if more than two characters are present.
        // Clicking on a result's more icon or name unveil more information
        // Toggling the radio buttons changes the function of the search bar from searhing the UW, searching the current site and searching the directory.
        events :
        {
            'keydown'                   : 'keyDownDispatch',
            'click .result .directory-more'       : 'showPersonInformation',
            'click .result .commonname' : 'showPersonInformation',
            'click label.radio'         : 'toggleSearchFeature',
            'click input:radio'         : 'stopProp',
            'change select'             : 'toggleSearchFeature',
            // 'keyup #uw-search-bar'      : 'searchDirectory',
            'click .search'             : 'submitForm',
            'submit form'               : 'submitSearch'
        },

        // Initialize the view and bind events to to the DirectoryModel `results` attribute.
        initialize :function ( options )
        {
            _.bindAll( this, 'toggleSearchBar', 'toggleBlur', 'keyDownDispatch', 'searchDirectory', 'parse' );

            this.settings = _.extend( {}, this.defaults , this.$el.data() , options )

            this.$searchbar = jQuery( _.template( this.searchbar , this.settings ) )

            this.render()

            this.$results  = this.$( '.uw-results' )
            this.$more    = this.$( '.more-results' )

            this.searchFeature = this.$el.find(':radio:checked').val()

            this.model.on( 'change:results', this.parse, this )
        },

        // Render the search bar above the `body` element and set the view element to the search bar HTML
        // since most events take place within that view.
        render : function()
        {
            UW.$body.prepend( this.$searchbar )

            this.$toggle = this.$el.find('button');
            this.$toggle.bind( {
                'click': this.toggleSearchBar,
                'blur': this.toggleBlur
            } );

            this.setElement( this.$searchbar )
        },

        // This shows and hides the search
        toggleSearchBar: function()
        {
            this.hideDirectory()
            this.$searchbar.toggleClass('open')
            UW.$body.toggleClass( 'search-open' )
            this.toggleBlur();
            return false;
        },

        toggleBlur: function()
        {
            if (this.$searchbar.hasClass('open')) {
                this.$searchbar.find('#uw-search-bar').focus();
            }
        },

        keyDownDispatch: function(event)
        {
            if (event.keyCode == 27){
                if (this.$searchbar.hasClass('open')){
                    this.toggleSearchBar();
                    this.$toggle.focus();
                }
            }
            else{
                var $target = jQuery(event.target);
                if ($target.is(':radio')) {
                    if ((event.keyCode == 13) || (event.keyCode == 32)){
                        $target.parent('label').trigger('click');
                    }
                    else if (event.keyCode == 9) {
                        event.preventDefault();
                        this.$toggle.focus();
                        $checked = this.$searchbar.find('input[value=' + this.searchFeature + ']');
                        if (!$checked.parent('label').hasClass('checked')){
                            this.$searchbar.find('label').removeClass('checked');
                            $checked.parent('label').addClass('checked');
                        }
                    }
                }
                else if ($target.is('#uw-search-bar')){
                    if (event.keyCode == 9) {
                        event.preventDefault();
                        if (this.$more.is(':visible')){
                            this.$more.find('a').focus();
                        }
                        else {
                            this.$searchbar.find('input[value=' + this.searchFeature + ']').focus();
                        }
                    }
                }
                else if ($target.is(this.$more.find('a')) && event.keyCode == 9){
                    event.preventDefault();
                    this.$searchbar.find('input[value=' + this.searchFeature + ']').focus();
                }
            }
        },

        stopProp: function(event)
        {
            event.stopPropagation();
        },

        // Set a property to the current radio button indicating which function the search bar is providing.
        toggleSearchFeature : function( e )
        {
            this.hideDirectory()
            var value = e.currentTarget.childNodes[1].value;
            this.searchFeature = value
            _.defer(function($searchbar) { $searchbar.find('#uw-search-bar').focus() }, this.$searchbar);
            if ( this.searchFeature === this.searchFeatures.directory )
                this.showDirectory()
            // this.mirrorSelectAndRadioElements()
        },

        // mirrorSelectAndRadioElements : function()
        // {
        // },

        // If the search bar is not searching the directiory behave like a normal search function and don't cancel
        // the submit event.
        submitSearch : function( e )
        {
            switch ( this.searchFeature )
            {
                case this.searchFeatures.uw :
                    this.$searchbar.find('input').attr('name', 'q')
                    this.$searchbar.find('form').attr('action', 'http://uw.edu/search/')
                    return true;

                case this.searchFeatures.site :
                    this.$searchbar.find('input').attr('name', 'keys')
                    this.$searchbar.find('form').attr('action', '/search')
                    return true;

                default:
                    return false;
            }
        },

        submitForm : function()
        {
            this.$searchbar.find('form').submit()
            return false;
        },


        // Check if a new search is in the searchbar, enough characters are in the searchbar and that there it
        // a term to search for. If all three of these checks pass, cache the search term and perform the search.
        // Note: this functino is debounced by 200ms to limit the number of searches triggered within that time period to one.
        searchDirectory : _.debounce( function( e ) {

            if ( this.value === e.target.value ) return
            if ( e.target.value.length < this.settings.limit ) return this.empty()
            if ( ! e.target.value.length ) return this.empty()

            this.value = e.target.value

            this.model.search( this.value )

        }, 200 ),

        hideDirectory : function()
        {
            this.$results.hide()
        },

        showDirectory : function()
        {
            this.$results.show()
        },

        // Empty the search results.
        empty : function()
        {
            this.$results.empty()
                .append( this.$more )

            if ( ! jQuery('#uw-search-bar').val() ) this.$more.hide()
        },

        // Parse the search results. The LDAP response from the server is first parsed by custom PHP and then
        // the new JSON feed is rendered here in the view.
        parse : function ( response )
        {
            var data = response.attributes.results
                , result   = this.result
                , $results = this.$results

            this.empty()

            _.each(data.Students, function( person, index ) {
                if ( person.commonname )
                {
                    var template = _.template( result, person )
                    $results.prepend( template )
                }
            })

            _.each(data['Faculty & Staff'], function( person, index ) {
                if ( person.commonname )
                {
                    var template = _.template( result, person )
                    $results.prepend( template )
                }
            })

            this.$more.show()

        },

        // Reveal or hide the directory more information.
        showPersonInformation : function( e )
        {
            this.$( e.currentTarget )
                .closest('.result')
                .toggleClass('open')
                .find('.information')
                .toggleClass( 'hidden' )
            return false;
        }


    })

    UW.Search.DirectoryModel = Backbone.Model.extend({

        settings : {
            limit    : '-1',
            action : 'directory',
            search : ''
        },

        initialize : function (options) {
            this.url = options.url;
        },

        search : function ( value ) {
            this.settings.search = value
            this.fetch( { data : this.settings })
        },

        parse : function( response ) {
            if ( response )
                this.set( 'results', response )
        }

    })
    ;// This section builds and populates the quicklinks section (off-canvas right)

    UW.QuickLinks = Backbone.View.extend({

        DELAY : 500,

        settings : {},

        // todo: the default list and these elements could be put into the php templates
        container: '#uw-container',

        template : '<nav id="quicklinks" role="navigation" aria-label="quick links" aria-hidden="true">' +
        '<h3>Undergraduate Admissions</h3>' +
        '<ul>' +
        '<% _.each( links, function( link ) { %> '+
        '<% if (link.ID > 500) { %>' +
        '<li>' +
        '<span class="<%= link.classes %>"></span>' +
        '<a href="<%= link.url %>" tabindex="-1"><%= link.title %></a>' +
        '</li>' +
        '<% } %>' +
        '<% }) %>' +
        '</ul>' +
        '<h3>All of UW</h3>' +
        '<ul>' +
        '<% _.each( links, function( link ) { %> ' +
        '<% if (link.ID < 400) { %>' +
        '<li>' +
        '<span class="<%= link.classes %>"></span>' +
        '<a href="<%= link.url %>" tabindex="-1"><%= link.title %></a>' +
        '</li>' +
        '<% } %>' +
        '<% }) %>' +
        '</ul>' +
        '<h3>Get Social</h3>' +
        '<ul>' +
        '<% _.each( links, function( link ) { %> '+
        '<% if (link.ID < 490 && link.ID > 390) { %>' +
        '<li>' +
        '<span class="<%= link.classes %>"></span>' +
        '<a href="<%= link.url %>" tabindex="-1"><%= link.title %></a>' +
        '</li>' +
        '<% } %>' +
        '<% }) %>' +
        '</ul>' +
        '</nav>',

        events: {
            'click'           : 'animate',
            'touchstart'   : 'animate',
            'keyup'         : 'animate',
            'blur button' : 'loop'
        },

        initialize: function ( options ) {
            _.bindAll( this, 'render', 'renderDefault', 'animate', 'accessible', 'loop', 'transitionEnd' );

            this.options = _.extend( {}, this.settings , options )

            this.links = new UW.QuickLinks.Collection( this.options )

            this.links.on( 'sync', this.render )

            this.links.on( 'error', this.renderDefault )
        },

        renderDefault : function ()
        {
            this.defaultLinks =  this.links.defaults
            this.render()
        },

        render : function(  )
        {
            this.quicklinks = jQuery( _.template( this.template, { links : this.defaultLinks ? this.defaultLinks : this.links.toJSON() }) )
            this.$container = jQuery(this.container);
            this.$container.prepend( this.quicklinks )
            this.$el.attr( 'aria-controls', 'quicklinks' ).attr( 'aria-owns', 'quicklinks' )
            UW.$body.on( 'keyup', '#quicklinks a', this.animate )
            this.quicklinks.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', this.transitionEnd);
        },

        transitionEnd: function (event) {
            if (this.open && event.target == this.quicklinks[0]) {
                this.accessible();
            }
        },

        animate: function ( e ) {
            e.preventDefault();

            if ( e.keyCode && e.keyCode != 27 )
            {
                if ( e.keyCode && e.keyCode != 13 ||
                    e.keyCode && e.keyCode != 32 )
                    return false;
            }

            this.$container.toggleClass('open')
            this.quicklinks.toggleClass('open')

            this.open = this.quicklinks.hasClass( 'open' )

            if (!this.open) {
                this.accessible();
            }
        },

        // todo : cache the uw-container-inner and screen-reader
        accessible : function (argument)
        {
            this.$el.find('button').attr( 'aria-expanded', this.open )
            this.quicklinks.attr('aria-hidden',  ( ! this.open ).toString() )
            if ( this.open ) {
                this.quicklinks.find('a').attr( 'tabindex', 0 ).first().focus()
                jQuery('#uw-container-inner').attr('aria-hidden', true);
                jQuery('.screen-reader-shortcut').attr('aria-hidden', true)
            } else {
                this.quicklinks.find('a').attr( 'tabindex', -1 )
                this.$el.find('button').focus()
                jQuery('#uw-container-inner').attr('aria-hidden', false);
                jQuery('.screen-reader-shortcut').attr('aria-hidden', false);
            }
        },

        loop : function (event) {
            if( this.open ) this.quicklinks.find('li a').first().focus();
        }

    });

    UW.QuickLinks.Model = Backbone.Model.extend({});

    UW.QuickLinks.Collection = Backbone.Collection.extend({

        model: UW.QuickLinks.Model,

        initialize: function ( options )
        {
            this.url = options.url;
            this.fetch()
        },

        defaults : [{
            "title": "MyUW",
            "url": "http:\/\/myuw.washington.edu",
            "classes": ["icon-myuw"]
        }, {
            "title": "Calendar",
            "url": "http:\/\/uw.edu\/calendar",
            "classes": ["icon-calendar"]
        }, {
            "title": "Directories",
            "url": "http:\/\/uw.edu\/directory\/",
            "classes": ["icon-directories"]
        }, {
            "title": "Libraries",
            "url": "http:\/\/www.lib.washington.edu\/",
            "classes": ["icon-libraries"]
        }, {
            "title": "Maps",
            "url": "http:\/\/uw.edu\/maps",
            "classes": ["icon-maps"]
        }, {
            "title": "UW Today",
            "url": "http:\/\/www.uw.edu\/news",
            "classes": ["icon-uwtoday"]
        }, {
            "title": "Computing\/IT",
            "url": "http:\/\/www.washington.edu\/itconnect\/forstudents.html",
            "classes": false
        }, {
            "title": "Employee Self Service",
            "url": "http:\/\/f2.washington.edu\/fm\/payroll\/payroll\/ESS",
            "classes": false
        }, {
            "title": "Husky Card",
            "url": "http:\/\/www.hfs.washington.edu\/huskycard\/",
            "classes": false
        }, {
            "title": "UW Medicine",
            "url": "http:\/\/www.uwmedicine.org",
            "classes": false
        }, {
            "title": "UW Bothell",
            "url": "http:\/\/www.bothell.washington.edu\/",
            "classes": false
        }, {
            "title": "UW Tacoma",
            "url": "http:\/\/www.tacoma.uw.edu\/",
            "classes": false
        }, {
            "title": "UW Facebook",
            "url": "https:\/\/www.facebook.com\/UofWA",
            "classes": false
        }, {
            "title": "UW Twitter",
            "url": "https:\/\/twitter.com\/UW",
            "classes": false
        }]

    });
    ;// ### UW Slideshow

// This function creates a UW Slideshow.
// For usage please refer to the [UW Web Components Slideshow](http://uw.edu/brand/web/#slideshow)

    UW.Slideshow = Backbone.View.extend({

        // The classname of the elements that will become slideshows
        el : '.uw-slideshow',

        // The `current` property indicates which slide number to animate in or out
        current : 0,

        // This is the template for the Previous and Next controls.
        // We're using an Undercore template to simplify the slideshow's markup.
        controls : '' +
        '<a href="#" class="<%= classname %> next"></a>' +
        '<a href="#" class="<%= classname %> previous"></a>'
        ,

        // This is a placeholder that is set to the final animation points for the slides
        // depending if they are animating in or animating out.
        animation : {},

        // These are the basic animation settings and classes used in the slidesshow.
        settings : {
            slideclass : '.slide',
            controlclasses : {
                base : 'uw-slideshow-controls',
                lastNext : 'last-next',
                lastPrev : 'last-previous'
            },
            animationOptions : {
                easing : 'easeOutQuint',
                duration : 1200,
                queue: false
            }
        },

        // The only events necessary are clicking the next and previous control arrows.
        events : {
            'click .previous' : 'animateIn',
            'click .next' : 'animateOut'
        },

        // When the view is initialized the controls are added to the dom, the number of slides is gathered,
        // and the z-index of the slides is reversed to keep the first image in the markup on top.
        initialize : function( options )
        {
            this.options = _.extend( {}, this.settings, options )
            _.bindAll( this, 'animateIn', 'animateOut', 'addControls', 'zIndex' )
            this.controls = _.template( this.controls, { classname: this.options.controlclasses.base } )
            this.numberOfSlides = this.$el.find('.slide').length - 1
            this.organizeSlideshow()
            this.addControls()
        },

        // Set the z-index of each slide appropriately.
        organizeSlideshow : function()
        {
            // this.$( this.$('.slide').get().reverse() ).each( this.zIndex )
            _.each( this.$('.slide').get(), this.zIndex )
            // this.$( '.slide' ).each( this.zIndex )
        },

        // Add the previous and next controls to the slideshow.
        addControls : function()
        {
            this.$el.append( this.controls )
            this.$el.find( this.options.controlclass )
            this.$el.addClass( this.options.controlclasses.lastPrev )
        },

        // When the `previous` control is clicked, this will animate a slide out of view into view.
        // The `current` property is adjusted twice to keep it bound to the number of slides.
        animateIn : function(e)
        {
            this.direction = 'in'
            this.current = this.current < 0 ? -1 : this.current-1
            this.animation.textLeft = 0
            this.animation.imageLeft = 0
            this.animate()
            this.current = this.current < 0 ? 0 : this.current
            this.toggleClasses()
            return false;
        },

        // When the `next` control is clicked, this will animate a slide in view out of view.
        // The `current` property is adjusted after animation to keep it bounded to the number of slides.
        animateOut : function(e)
        {
            this.direction = 'out'
            this.animation.textLeft = '-200%'
            this.animation.imageLeft = '100%'
            this.animate()
            this.current = this.current === this.numberOfSlides ? this.numberOfSlides : this.current+1
            this.toggleClasses()
            return false;
        },

        // This function animates the slides based on the values set by `animateIn` or `animateOut`.
        animate : function()
        {
            if ( this.nextSlideExists() )
            {
                this.$( this.options.slideclass ).eq( this.current ).animate({left: this.animation.imageLeft }, this.options.animationOptions )
                    .find('div').animate({left: this.animation.textLeft }, this.options.animationOptions )
            }
        },

        // Toggle a slideshow class that will indicate when there are no more slides in that direction.
        toggleClasses : function()
        {

            this.$el.removeClass( this.options.controlclasses.lastNext + ' ' + this.options.controlclasses.lastPrev )

            if ( this.current === 0 || this.current === this.numberOfSlides )
                return this.$el.addClass( this.direction === 'out' ? this.options.controlclasses.lastNext : this.options.controlclasses.lastPrev )

            return
        },

        // Check if the next slide exists. If it does animate. Otherwise, do not animate.
        nextSlideExists: function()
        {
            if ( this.current < 0 && this.direction === 'in' ||
                this.current === this.numberOfSlides && this.direction === 'out' )
                return false;


            return true;
        },

        // Set the z-index of the slide based on its index in the DOM.
        zIndex : function( slide )
        {
            var $this = jQuery( slide )
            $this.css({ zIndex : -1 * $this.index() + this.numberOfSlides })
        }

    })
    ;// ### UW Youtube

// This provides the structure and functionality of the UW Youtube player
// For usage please refer to the [UW Web Youtube Player](http://uw.edu/brand/web/#youtube)
// It can support a single youtube video or playlist embed
// options include max results for playlists, modest youtube branding and default resolution 
// requires a unique id for each div.uw-youtube even if there is just one

//       Single: <div id='some-unique-id' class="uw-youtube" data-uw-youtube='youtube_id_here' data-uw-youtube-type='single'></div>
//       Playlist: <div id='some-unique-id' class="uw-youtube" data-uw-youtube='youtube_playlist_id_here' data-uw-youtube-type='playlist'></div>

    UW.YouTube = {};

//the UW.YouTube.Collection object contains data in models that refer to youtube videos
//(alone or in a playlist) and has a view that renders the proper player with the data
    UW.YouTube.Collection = Backbone.Collection.extend({

        // Initialize the player embeds
        // once the player type has been determined, get the associated data
        initialize: function (options) {
            _(this).bindAll('parse');
            this.el = options.el;
            this.$el = jQuery(this.el);
            this.youtube_id = this.$el.data('uw-youtube');
            this.setup_for_type();
            this.make_view();
            this.fetch({success: this.view.onDataReady});
        },

        // See if the div.uw-youtube is a playlist or single video
        // setup the proper request and model type
        // setup some other relative parameters
        setup_for_type : function (youtube_id) {
            this.type = this.$el.data('uw-youtube-type');
            this.modest = this.$el.data('modest');
            this.resolution = this.$el.data('resolution');
            if (this.type == 'playlist'){
                this.max_results = 20;
                var max_results_temp = parseInt(this.$el.data('max-results'), 10);
                if (max_results_temp > 0) {
                    this.max_results = max_results_temp;
                }
                this.model = UW.YouTube.PlaylistItem;
                this.url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + this.youtube_id + '&key=AIzaSyApmhFr5oa8bmKPcpN7bm-h0mekjkUVypU&maxResults=' + this.max_results;
            }
            else if (this.type == 'single') {
                this.model = UW.YouTube.Video;
                this.url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + this.youtube_id + '&key=AIzaSyApmhFr5oa8bmKPcpN7bm-h0mekjkUVypU';
            }
        },

        // organize useful information from the ajax request
        parse: function (response) {
            var type = this.type, youtube_id = this.youtube_id;
            return _(response.items).map(function (item) {
                if (type == 'single'){
                    item.snippet.resourceId = {videoId: youtube_id};
                }
                return item.snippet;
            });
        },

        // make the view at the proper time
        make_view: function (type) {
            this.view = new UW.YouTube.CollectionView({collection: this});
        },

    });

// The CollectionView builds the html for the player and the control structure for the vidoes
    UW.YouTube.CollectionView = Backbone.View.extend({

        // template that all videos get
        template : "<div class='nc-video-player'><div class='tube-wrapper'></div></div>",

        // playist section html that only playlists get
        playlist_section : "<div class='vidSmall'><div class='scrollbar'><div class='track'><div class='thumb'><div class='end'></div></div></div></div><div class='viewport'><div class='vidContent overview'><ul></ul></div></div></div>",

        //event handlers for the templated html
        events: {
            'click a': 'preview_clicked'
        },

        // set up the view for this collection
        // add the youtube iframe api if necessary
        // add the templates
        initialize: function () {
            _(this).bindAll('onReady', 'onDataReady', 'onStateChange', 'preview_clicked', 'resized');
            this.player_ready = false;
            this.data_ready = false;
            this.wrap();
            this.add_iFrame_api();
            if (this.collection.type == 'playlist'){
                this.$el.addClass('playlist');
                this.add_playlist_section();
                this.scrollbar_visible = false;
                jQuery(window).resize(this.resized);
            }
        },

        // a resize handler for playlists. Handles the edge case of when a container
        // is resized to be too small for the list and therefor requires a scrollbar
        // when none is present or vice versa
        resized: function() {
            var viewport_new_width = this.$vidSmall.find('.viewport').width();
            if (viewport_new_width != this.$viewport_width){
                this.$viewport_width = viewport_new_width;
                this.showTinyScrollbar();
            }
        },

        // wraps our collection in the main template and saves references to the container
        wrap: function () {
            this.collection.$el.wrap(jQuery(this.template));
            this.$el = this.collection.$el.parents('.nc-video-player');  //unattached jquery object won't wrap right if we add possible playlist section first
            this.el = this.$el[0];
        },

        // if we don't have a copy of the youtube iframe api yet. add it
        add_iFrame_api: function () {
            if (UW.$body.find('script#iFrame').length === 0){
                UW.$body.append('<script id="iFrame" src="//www.youtube.com/player_api" type="text/javascript"></script>');
                this.add_iFrame_function();
            }
        },

        // at this point, all the collections should be created.
        // Each gets a uwplayer variable that is a YT.Player corresponding to the collection
        add_iFrame_function: function () {
            window.onYouTubeIframeAPIReady = function() {
                for (var i = 0, length = UW.youtube.length; i < length; i++){
                    var collection = UW.youtube[i], player_vars = {};
                    // if the collection desires no youtube branding, set these parameters
                    if (collection.modest) {
                        player_vars = {
                            'rel'           : 0,
                            'controls'      : 0,
                            'modestbranding': 1,
                        }
                    }
                    // if (collection.resolution !== 'undefined'){
                    //     player_vars.VQ = collection.resolution;
                    // }
                    //attach the YT.player to the relevant view, each view gets one
                    collection.view.uwplayer = new YT.Player(collection.$el.attr('id'), {
                        videoId: '',
                        playerVars: player_vars,
                        events: {
                            //these events will call functions in the relevant view
                            'onReady': collection.view.onReady,
                            'onStateChange': collection.view.onStateChange
                        }
                    });
                }
            };
        },

        // This function is called if the collection is a playlist
        // adds the playlist section
        add_playlist_section : function () {
            this.$el.append(this.playlist_section);
            this.$vidSmall = this.$el.find('.vidSmall');
            this.$vidContent = this.$el.find('.vidContent');
            this.scrollbar_visible = false;
        },

        // this is the callback for when the youtube iframe api is ready to go
        // checks to see if the data is ready too
        onReady: function () {
            this.player_ready = true;
            this.check_all_ready();
        },

        // this is the callback for whne the data is loaded into the models
        // preps the playlist area if its a playlist
        // checks to see if the iframe api is ready
        onDataReady: function () {
            this.data_ready = true;
            if (this.collection.type == 'playlist'){
                this.$vidContent_width = this.collection.models.length * 135
                this.$vidContent.width(this.$vidContent_width + 'px');
                this.$viewport_width = this.$vidSmall.find('.viewport').width();
                this.showTinyScrollbar();
            }
            this.check_all_ready();
        },

        // this function shows the tiny scrollbar.
        showTinyScrollbar: function () {
            if (this.$vidContent_width > this.$viewport_width){
                if (!this.scrollbar_visible) {
                    this.$vidSmall.find('.scrollbar').show();
                    this.$vidSmall.tinyscrollbar({axis: 'x'});
                    this.scrollbar_visible = true;
                }
            }
            else if (this.scrollbar_visible){
                this.$vidSmall.find('.scrollbar').removeAttr('style');
                this.scrollbar_visible = false;
            }
        },

        // this function checks the state of data/player to prevent a race case.
        // Both the data and the player must be ready to go.  Then we play the correct video
        check_all_ready: function() {
            if (this.data_ready && this.player_ready){
                this.play(this.collection.models[0].get('resourceId').videoId);
            }
        },

        // when the player changes state, this is run.
        // Currently stuff only happens if this is a playlist
        // TODO: add a publicly visible event on video end for showcase pages
        onStateChange: function (event) {
            if (this.is_playlist) {
                //event.data is 0 when a video finishes playing.  Find out what video we just finished, then play the next one or loop back to the beginning of the playlist
                if (event.data === 0) {
                    var video = this.$vidContent.find('.vid-active').attr('id');
                    var index = this.video_ids.indexOf(video);
                    if (index < this.video_ids.length - 1) {
                        this.play(this.video_ids[index + 1]);
                    }
                    else {
                        this.play(this.video_ids[0]);
                    }
                }
            }
        },

        // play the video id passed. If 'playnow' not passed, assume false.
        // If 'playnow' is true play the video, otherwise just cue it up
        play: function (id, playnow){
            playnow = playnow || false;
            if (playnow) {
                this.uwplayer.loadVideoById(id);
            }
            else {
                this.uwplayer.cueVideoById(id);
            }
            //If this is a playlist we must also manipulate the placeholder drawer.  Move the selected video's placeholder to the front if we can, otherwise move the listas far as we can without creating whitespace.  Then visually distinguish the selected video's placeholder
            if (this.collection.type == 'playlist') {
                this.$el.find('a.vid-active').removeClass('vid-active');
                var $small = jQuery('#' + id);
                $small.addClass('vid-active');
                if (this.scrollbar_visible){
                    var leftpos = $small.position().left;
                    if (this.$vidContent_width - leftpos < this.$viewport_width){
                        leftpos = this.$vidContent_width - this.$viewport_width;
                    }
                    this.$vidContent.animate({left: -leftpos}, 500);
                    this.$vidSmall.data('plugin_tinyscrollbar').update(leftpos);
                }
            }
        },

        // this fires if a video preview in the playlist area is clicked
        preview_clicked: function (event) {
            this.play(event.currentTarget.id, true);
        }
    });


// Video is a model for a single video
    UW.YouTube.Video = Backbone.Model.extend({
        initialize: function () {
            if (this.get('resourceId')){
                this.view = new UW.YouTube.VideoView({model: this});
            }
        }
    });

// Video View is a view for single video. Currently does nothing
    UW.YouTube.VideoView = Backbone.View.extend({
        //template: underscore + html string here,

        initialize: function () {
            this.render();
        },

        render: function () {
            //var item = this.model.toJSON();
            //var small_vid = _.template(this.template, item);
            //this.model.collection.view.$vidSmall.append(small_vid);
        }
    });

// PlaylistItem is the model for a video in a playlist
    UW.YouTube.PlaylistItem = Backbone.Model.extend({

        // if the video is a real video and not an error code, make a view
        initialize: function () {
            if (this.get('resourceId')){
                this.view = new UW.YouTube.PlaylistItemView({model:this});
            }
        },
    });

// PlaylistItemView is the view for a playlist item
    UW.YouTube.PlaylistItemView = Backbone.View.extend({

        // this is the template for a playlist item preview
        // goes inside the playlist section
        template: "<li><a id='<%= resourceId.videoId %>' class='video'><img src='<%= thumbnails.default.url %>'/><div class='text'><p class='title'><%= title %></p></div></a></li>",

        // preps the $el and renders
        initialize: function () {
            this.$el = this.model.collection.view.$vidContent.find('ul');
            this.render();
        },

        // gets the data ready, templates it, then appends to the playlist section
        render: function () {
            var item = this.model.toJSON();
            var small_vid = _.template(this.template, item);
            this.$el.append(small_vid);
        },
    });
    ;// ### UW Vimeo

// This function creates the UW Vimeo player
// For usage please refer to the [UW Web Vimeo Player](http://uw.edu/brand/web/#vimeo)
// TODO: Get postMessage to work after iframe has loaded or find the correct API postMessage

//       Single: <div class="uw-vimeo" data-video=76979871 data-width=800 data-height=500></div>
//       Playlist :<div class="uw-vimeo" data-username=uwathleticsmarketing data-width=800 data-height=500></div>


    UW.Vimeo = Backbone.View.extend({

        // The classname to look for when embedding Vimeo videos
        el : '.uw-vimeo',

        // List the events in the view.
        // Clicking a preview item will load that video
        events : {
            'click .preview' : 'loadVideo',
        },

        // The two templates necessary for the embed.
        // The first one is the standard Vimeo iFrame which is used for both single and playlist driven embeds.
        // The second one is the playlist and only shows if a playlist is being called.
        templates : {
            video    : '<iframe id="test" src="https://player.vimeo.com/video/<%= video %>/?<%= $.param( defaults ) %>"' +
            ' width=<%= width %> height=<%= height %>'+
            ' frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',

            playlist : '' +
            '<div class="playlist">'+
            '<% _.each( videos, function( video ) { %>' +
            '<div class="preview" data-id=<%= video.id %>>' +
            '<img src="<%= video.thumbnail_small %>" height=75 width=100 title="<%= video.title %>"/>'+
            '</div>' +
            '<% }) %>' +
            '</div>'
        },

        // Default settings
        settings : {
            width  : 580,
            height : 350
        },

        // Default video attributes that cannot be overwritten
        defaults : {
            api      : 1,
            title    : 0,
            portrait : 0,
            byline   : 0,
            color    : '4B2E82'
        },

        // Initialize the video embeds.
        // Check to see if the `div.uw-vimeo` is requesting a single video or a playlist.
        // Note: Playlists are currently restricted to usernames.
        initialize : function( options )
        {
            _.bindAll( this, 'single', 'playlist', 'loadVideo' )

            this.options = _.extend( {}, this.settings , this.$el.data(), options )
            this.options.defaults = this.defaults

            this.$el.width( this.options.width )

            if ( this.options.video )
            {
                this.video = new UW.Vimeo.Video( this.options.video )
                this.video.on( 'sync', this.single )
            }

            if ( this.options.username )
            {
                this.videos = new UW.Vimeo.Playlist( { username : this.options.username } )
                this.videos.on( 'sync', this.playlist )
            }

        },

        // This loads the single video template and puts it into the DOM
        single : function()
        {
            this.player = _.template( this.templates.video, this.options )
            this.$el.html( this.player )
        },

        // This loads the playlist template and puts it into the DOM
        playlist : function()
        {

            _.extend( this.options, { video : this.videos.first().get('id') } )
            this.player = _.template( this.templates.video, this.options )

            this.videoList = _.template( this.templates.playlist, { videos : this.videos.toJSON() })

            this.$el.html( this.player )
            this.$el.append( this.videoList )

        },

        // This loads a new video when a preview image is clicked.
        loadVideo : function( e )
        {
            var iframe = this.$el.find('iframe')
                , params = _.last( iframe.attr('src').split('?') )
                , url = 'https://player.vimeo.com/video/' + jQuery(e.currentTarget).data().id + '/?' +params

            iframe.attr('src', url)

            /* iframe.get(0).contentWindow.postMessage({method:'play'}, url) */

        }

    })

// This is a model for a Vimeo video.
// It takes its attributes from the Vimeo JSON API.
    UW.Vimeo.Video = Backbone.Model.extend({

        url : function()
        {
            return 'https://vimeo.com/api/v2/video/' + this.video +'.json'
        },

        parse : function( data )
        {
            return _.first(data)
        },

        initialize : function( video )
        {
            this.video = video
            this.fetch()
        }

    })

// This is a collection for a Vimeo feed
// It takes its attributes from the Vimeo JSON API much like the `UW.Vimeo.Video` model does.
// Only videos with the property of `{ embed_privacy : anywhere }` will be shown.
    UW.Vimeo.Playlist = Backbone.Collection.extend({

        url : function()
        {
            return 'https://vimeo.com/api/v2/'+ this.username +'/videos.json'
        },

        initialize : function( options )
        {
            this.username = options.username;
            this.fetch()
        },

        parse : function( data )
        {
            return _.where( data, { embed_privacy : 'anywhere' })
        }

    })
    ;/* RADIO PUBLIC CLASS DEFINITION
     * ============================== */
    (function($){
        UW.Radio = Backbone.View.extend({

            states :
            {
                checked  : 'checked',
                disabled : 'disabled'
            },

            events :
            {
                'click input' : 'toggle'
            },

            template: '<span class="icons"><span class="first-icon fui-radio-unchecked"></span><span class="second-icon fui-radio-checked"></span></span>',

            initialize : function( options )
            {
                _.bindAll( this, 'toggle', 'getGroup', 'toggleCheckBox' )

                this.settings = _.extend( {}, this.defaults , this.$el.data() , options )

                this.$el.before( this.template )

                this.$input = this.$el

                this.name   = this.$el.attr( 'name' )

                this.setElement( this.$el.closest('label') )

                this.setState()
            },

            setState: function()
            {
                if ( this.$input.prop( this.states.disabled ) ) this.$el.addClass( this.states.disabled )
                if ( this.$input.prop( this.states.checked ) ) this.$el.addClass( this.states.checked )
            },

            getGroup : function()
            {
                return _.where( UW.radio, { name : this.name })
            },

            toggle : function(e )
            {
                _.each( this.getGroup() , this.toggleCheckBox )
            },

            toggleCheckBox : function( view )
            {
                var checked  = view.$input.prop( this.states.checked )
                    , disabled = view.$input.prop( this.states.disabled )

                if ( ! disabled &&
                    view.$el.removeClass( this.states.checked ) )
                    view.$el.removeAttr( this.states.checked ).trigger( 'change' )

                if ( ! disabled )
                {

                    if ( checked && view.$el.addClass( this.states.checked ) )
                        view.$el.trigger( $.Event('toggle') )

                    if ( checked !== view.$el.prop( this.states.checked ) )
                        view.$el.trigger( 'change' )

                }

            }

        })
        ;
    })(jQuery);

// ### UW Dropdowns

// This function creates the UW Dropdowns
// For usage please refer to the [UW Web Components Dropdowns](http://uw.edu/brand/web/#dropdowns)



    UW.Dropdowns = Backbone.View.extend({

        chunkSize : 8,
        menuWidth : 1170,
        menuBlock : '<div class="menu-block"></div>',
        menuBlockWidth : 250,

        index : {
            topmenu : 0,
            submenu : 0
        },

        elements : {
            toplevel : '.dawgdrops-item'
        },

        keys : {
            enter    :   13,
            esc      :   27,
            tab      :   9,
            left     :   37,
            up       :   38,
            right    :   39,
            down     :   40,
            spacebar :   32
        },


        events : {
            'keydown .dawgdrops-menu a' : 'moveFocusInSubMenu',
            'keydown .dawgdrops-item > a' : 'toggleSubMenu',
            'mouseenter .dawgdrops-item' : 'positionSubmenu'
        },


        initialize : function(options)
        {
            _.bindAll( this, 'render', 'chunk', 'wrap', 'wrapChildren', 'positionSubmenu', 'toggleSubMenu' )
            this.settings = _.extend( {}, this.defaults , this.$el.data() , options )
            this.$topLevelNav = this.$el.find( this.elements.toplevel )
            this.render()
        },

        render : function()
        {
            _.each( this.$topLevelNav, this.wrapChildren )
        },

        chunk : function( element, index )
        {
            return Math.floor( index / this.chunkSize );
        },

        wrapChildren : function( element )
        {
            if ( jQuery(element).find('li').length > this.chunkSize )
                _.each( _.groupBy( jQuery( element ).find('li'), this.chunk ), this.wrap )
        },

        wrap : function( elements )
        {
            jQuery( elements ).wrapAll( this.menuBlock )
        },

        // todo: tidy up the math / variables
        positionSubmenu : function( el )
        {
            var $el = jQuery(el.currentTarget)
                , position = $el.position()
                , menublock = $el.find('.menu-block')
                , shift = ( this.menuBlockWidth * ( menublock.length ) ) + position.left
                , left = shift > this.menuWidth ? position.left - ( shift - this.menuWidth ) : position.left

            $el.find('ul').css( { top : position.top + 58, left: left })
        },

        toggleSubMenu : function( e )
        {
            switch ( e.keyCode )
            {

                case this.keys.enter :
                case this.keys.down  :

                    jQuery(e.currentTarget).attr('aria-expanded', 'true');
                    this.currentSubMenu = jQuery(e.currentTarget).siblings('ul')
                    this.currentSubMenuAnchors = this.currentSubMenu.find('a')

                    this.currentSubMenu
                        .attr( 'aria-expanded', 'true' )
                        .show()
                        .find('a')
                        .eq(0)
                        .focus()

                    return false

                case this.keys.left :
                    jQuery(e.currentTarget).parent().prev().children('a').first().focus()
                    return false


                case this.keys.right :
                    jQuery(e.currentTarget).parent().next().children('a').first().focus()
                    return false

                case this.keys.spacebar:
                    window.location.href = jQuery(e.currentTarget).attr('href')
                    return false;

            }

        },

        moveFocusInSubMenu : function(e)
        {
            switch ( e.keyCode ) {

                case this.keys.tab:
                    if ( this.currentSubMenu )
                    {
                        this.currentSubMenu.hide()
                        this.currentSubMenu = null
                        this.index.submenu = 0
                    }
                    break

                case this.keys.down:
                    this.index.submenu = this.index.submenu === this.currentSubMenuAnchors.length-1 ? 0 : this.index.submenu + 1
                    this.currentSubMenuAnchors.eq( this.index.submenu ).focus()
                    return false

                case this.keys.up :
                    this.index.submenu = this.index.submenu === 0 ? this.currentSubMenuAnchors.length-1 : this.index.submenu - 1
                    this.currentSubMenuAnchors.eq( this.index.submenu ).focus()
                    return false

                case this.keys.left:
                    this.currentSubMenu.hide().parent().prev().children('a').first().focus()
                    this.currentSubMenu.attr( 'aria-expanded', 'false' )
                        .parent().children('a').first().attr('aria-expanded', 'false')
                    return false;

                case this.keys.right:
                    this.currentSubMenu.hide().parent().next().children('a').first().focus()
                    this.currentSubMenu.attr( 'aria-expanded', 'false' )
                        .parent().children('a').first().attr('aria-expanded', 'false')
                    return false;

                case this.keys.spacebar:
                case this.keys.enter:
                    window.location.href = jQuery(e.currentTarget).attr('href')
                    return false;

                case this.keys.esc:
                    this.currentSubMenu.attr('aria-expanded', 'false' )
                        .hide().parent().children('a').first().attr('aria-expanded', 'false').focus();
                    return false;

                default:
                    var chr = String.fromCharCode(e.which)
                        , exists = false;

                    this.currentSubMenuAnchors.filter(function() {
                        exists = this.innerHTML.charAt(0) === chr
                        return exists;
                    }).first().focus();

                    return !exists;


            }
        }

    })
    ;// ### UW Dropdowns

// This function creates the UW mobile menu toggle

    UW.MobileMenu = Backbone.View.extend({

        events: {
            // 'click' : 'toggle'
        },

        initialize : function( options )
        {
            this.settings = _.extend( {}, this.defaults , this.$el.data() , options )
            this.$mobilemenu = this.$el.siblings().first()
        },

        toggle: function()
        {
            this.$mobilemenu.toggle()
        }


    })
    ;// ### UW Accordion

// This creates a UW Accordion
// For usage, refer to the [UW Web Components webpage](http://uw.edu/brand/web#accordion)

    UW.Accordion = Backbone.View.extend({

        //what element becomes an accordion
        el: '.uw-accordion',

        events: {
            'click h3' : 'animate'
        },

        initialize: function () {
            _.bindAll(this, 'animate');
            this.$el.find('h3').addClass('inactive');
            this.$el.find('div').addClass('inactive');
        },

        animate: function (e) {
            var $target = jQuery(e.target);
            if ($target.hasClass('inactive')) {
                this.$el.find('h3.active').removeClass('active').addClass('inactive');
                this.$el.find('div.active').animate({height: '0px'}, 500, function () {
                    var $this = jQuery(this);
                    $this.removeClass('active').addClass('inactive');
                    $this.removeAttr('style');
                });
                $target.removeClass('inactive').addClass('active');
                var $next = $target.next('div.inactive');
                $next.removeClass('inactive').addClass('active');
                var $next_height = $next.outerHeight(true);
                $next.removeClass('active');
                $next.animate({height: $next_height}, 500, function() {
                    $next.addClass('active');
                    $next.removeAttr('style');
                });
            }
            else {
                $target.removeClass('active').addClass('inactive');
                $target.next('div.active').animate({height: '0px'}, 500, function () {
                    var $this = jQuery(this);
                    $this.removeClass('active').addClass('inactive');
                    $this.removeAttr('style');
                });
            }
        },
    });
    ;// ### UW Social

// This function creates the UW social media buttons
// For usage please refer to the [UW Web Components Social](http://uw.edu/brand/web/#social)

    UW.Social = Backbone.View.extend({

        // The classname of the elements that will become a set of social buttons
        el : '.uw-social',

        // The template that generates the social buttons. Only the chosen buttons are rendered.
        // See the [UW Web Components](http://uw.edu/brand/#social) for instructions on how to choose each button.
        template : '<ul>' +
        '<% if ( _.isString( facebook ) ) { %> <li><a class="uw-social-facebook" href="http://www.facebook.com/sharer.php?u=<%= url %>">Facebook</a></li> <% } %>' +
        '<% if ( _.isString( twitter ) ) { %> <li><a class="uw-social-twitter" href="http://twitter.com/?status=<%= url %>">Twitter</a></li> <% } %>' +
        '<% if ( _.isString( reddit ) ) { %> <li><a class="uw-social-reddit" href="http://reddit.com/submit?url=<%= url %>">Reddit</a></li> <% } %>' +
        '<% if ( _.isString( digg ) ) { %> <li><a class="uw-social-reddit" href="http://digg.com/submit?url=<%= url %>">Digg</a></li> <% } %>' +
        '<% if ( _.isString( stumbleupon ) ) { %> <li><a class="uw-social-reddit" href="http://www.stumbleupon.com/submit?url=<%= url %>">StumbleUpon</a></li> <% } %>' +
        '</ul>',

        // Default list of compatible buttons
        settings : {
            facebook    : false,
            twitter     : false,
            reddit      : false,
            digg        : false,
            stumbleupon : false,
            url         : document.URL
        },

        // Initialize and render the button view. The data attributes of `div.uw-social` will be parsed and used to determine which buttons to render.
        initialize : function( options )
        {
            this.options = _.extend( {}, this.settings, this.$el.data() , options )
            this.buttons = _.template( this.template, this.options )
            this.$el.html( this.buttons )
        },

    })
    ;}).call(this)