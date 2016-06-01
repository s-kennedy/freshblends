this["Freshblends"] = this["Freshblends"] || {};
this["Freshblends"]["Templates"] = this["Freshblends"]["Templates"] || {};

this["Freshblends"]["Templates"]["index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li class=\"page_item\"><a href=\"#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-lg-3 col-sm-3 focus-box\" data-scrollreveal=\"enter left after 0.15s over 1s\">\n      <div class=\"service-icon\">\n        <a href=\"#\"><i class=\"pixeden\" style=\"background:url(images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + ") no-repeat center;width:100%; height:100%;\"></i> <!-- FOCUS ICON--></a>\n      </div>\n          \n      <h3 class=\"red-border-bottom\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n      <!-- FOCUS HEADING -->\n\n      <p>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <li class=\"skill\">\n          <div class=\"skill-count\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></div>\n          <div class=\"section-legend\">"
    + container.escapeExpression(((helper = (helper = helpers.skill || (depth0 != null ? depth0.skill : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"skill","hash":{},"data":data}) : helper)))
    + "</div>\n        </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <li class=\"skill skill_5\">\n          <div class=\"skill-count\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></div>\n          <div class=\"section-legend\">"
    + container.escapeExpression(((helper = (helper = helpers.skill || (depth0 != null ? depth0.skill : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"skill","hash":{},"data":data}) : helper)))
    + "</div>\n        </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"feedback-box\">\n\n              <h3 class=\"red-border-bottom\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n              <div class=\"message\">\n              <h4>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h4>\n                <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n              </div>\n\n          </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                  <li>"
    + container.escapeExpression(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"item","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"col-lg-3 col-sm-3 team-box\">\n\n        <div class=\"team-member\">\n          <figure class=\"profile-pic\">\n            <img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"Uploaded image\" />\n          </figure>\n        \n          <div class=\"member-details\">\n            <h3 class=\"dark-text red-border-bottom\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n            <div class=\"position\">"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</div>\n          </div>\n\n          <div class=\"details\">\n            "
    + alias4(((helper = (helper = helpers.details || (depth0 != null ? depth0.details : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"details","hash":{},"data":data}) : helper)))
    + "\n          </div>\n        \n        </div>\n      </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n  <div class=\"col-md-3 company-details\">\n    <p>"
    + alias4(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>Contact: "
    + alias4(((helper = (helper = helpers.contact || (depth0 != null ? depth0.contact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>Email: "
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>Phone: "
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</p>\n  </div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"preloader\"><div class=\"status\">&nbsp;</div></div>\n\n<header id=\"home\" class=\"header\">\n\n  <div id=\"main-nav\" class=\"navbar navbar-inverse bs-docs-nav\" role=\"banner\">\n\n    <div class=\"container\">\n\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".bs-navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <div class=\"navbar-header responsive-logo\">\n        <a href=\"https://wp-themes.com/\" class=\"navbar-brand\"><img src=\"images/logo.png\" alt=\"Theme Preview\"></a>\n      </div>\n\n      <nav class=\"navbar-collapse bs-navbar-collapse collapse\" role=\"navigation\"   id=\"site-navigation\">\n        <ul class=\"nav navbar-nav navbar-right responsive-nav main-nav-list\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.navigation : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </nav>\n\n    </div>\n\n  </div> <!-- / END MAIN NAV -->\n\n  <!-- / END TOP BAR -->\n  <div class=\"home-header-wrap\">\n\n    <div class=\"header-content-wrap\">\n      <div class=\"container\">\n        <h1 class=\"intro-text\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.header : stack1)) != null ? stack1.intro : stack1), depth0))
    + "</h1>\n        <div class=\"buttons\">\n          <a href=\"https://www.dropbox.com/s/qktrbiz6ox3x2ui/Copacker%20in%20Rwanda_small.pdf?dl=0\" class=\"btn btn-primary custom-button red-btn\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.header : stack1)) != null ? stack1.button : stack1), depth0))
    + "</a>\n        </div>\n      </div>\n    </div>\n    <!-- .header-content-wrap -->\n    <div class=\"clear\"></div>\n  </div>\n</header> <!-- / END HOME SECTION  -->\n\n<div id=\"content\" class=\"site-content\">\n\n<section class=\"focus\" id=\"about\">\n\n<div class=\"container\">\n\n  <!-- SECTION HEADER -->\n\n  <div class=\"section-header\">\n\n    <!-- SECTION TITLE -->\n\n    <h2 class=\"dark-text\">"
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.navigation : stack1)) != null ? stack1.section1 : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n    <div class=\"section-legend\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.about : stack1)) != null ? stack1.legend : stack1), depth0))
    + "</div>\n  </div>\n\n  <div class=\"row\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.about : stack1)) != null ? stack1.columns : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div> <!-- / END CONTAINER -->\n\n</section>  <!-- / END FOCUS SECTION -->\n\n<section class=\"about-us\" id=\"offer\">\n  <div class=\"container\">\n\n    <!-- SECTION HEADER -->\n\n    <div class=\"section-header\">\n\n      <!-- SECTION TITLE -->\n\n      <h2 class=\"white-text\">"
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.navigation : stack1)) != null ? stack1.offer : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n      <!-- SHORT DESCRIPTION ABOUT THE SECTION -->\n\n      <div class=\"white-text section-legend\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.legend : stack1), depth0))
    + "\n      </div>    \n    </div><!-- / END SECTION HEADER -->\n\n    <!-- 3 COLUMNS OF ABOUT US-->\n\n    <div class=\"row\">\n\n      <!-- COLUMN 1 - BIG MESSAGE ABOUT THE COMPANY-->\n\n    <div class=\"col-lg-4 col-md-4 column zerif-rtl-big-title\">\n      <div class=\"big-intro\" data-scrollreveal=\"enter left after 0s over 1s\">\n        "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.bigText : stack1), depth0))
    + "\n      </div>\n      <p style=\"text-align:right;\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.smallText : stack1), depth0))
    + "</p>\n    </div>\n\n    <div class=\"col-lg-4 col-md-4 column zerif-rtl-skills \">\n\n      <ul class=\"skills\" data-scrollreveal=\"enter right after 0s over 1s\">\n\n        <!-- SKILLS -->\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.services : stack1)) != null ? stack1.column1 : stack1)) != null ? stack1.skills : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n\n    </div> <!-- / END SKILLS COLUMN 1-->\n\n      <div class=\"col-lg-4 col-md-4 column zerif-rtl-skills \">\n        <ul class=\"skills\" data-scrollreveal=\"enter right after 0s over 1s\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.offer : stack1)) != null ? stack1.services : stack1)) != null ? stack1.column2 : stack1)) != null ? stack1.skills : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n\n    </div> <!-- / END SKILLS COLUMN 2-->\n\n    \n  </div> <!-- / END 3 COLUMNS OF ABOUT US-->\n\n  <!-- CLIENTS -->\n  \n</div> <!-- / END CONTAINER -->\n\n</section> <!-- END ABOUT US SECTION -->\n\n<section class=\"testimonial\" id=\"solutions\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2 class=\"white-text\">"
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.navigation : stack1)) != null ? stack1.solutions : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n    </div>\n    <div class=\"row\" data-scrollreveal=\"enter right after 0s over 1s\">\n      <div class=\"col-md-12\">\n        <div id=\"client-feedbacks\" class=\"owl-carousel owl-theme  \">\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.solutions : stack1)) != null ? stack1.packages : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n    </div>\n  </div>\n</section> \n\n<section class=\"our-team\" id=\"team\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2 class=\"dark-text\">"
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.navigation : stack1)) != null ? stack1.team : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n\n      <div class=\"section-legend\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.team : stack1)) != null ? stack1.legend : stack1), depth0))
    + "</div>\n    </div>\n\n    <div class=\"row\" data-scrollreveal=\"enter left after 0s over 0.1s\">\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.team : stack1)) != null ? stack1.members : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n</section> \n\n<section class=\"contact-us\" id=\"contact\">\n  <div class=\"container\">\n    <!-- SECTION HEADER -->\n    <div class=\"section-header\">\n\n      <h2 class=\"white-text\">"
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.navigation : stack1)) != null ? stack1.contact : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>          \n    </div>\n    <!-- / END SECTION HEADER -->\n\n    <!-- CONTACT FORM-->\n    <div class=\"row\">\n\n      <form role=\"form\" method=\"POST\" action=\"https://formspree.io/sharonkennedy100@gmail.com\" onSubmit=\"this.scrollPosition.value=(document.body.scrollTop || document.documentElement.scrollTop)\" class=\"contact-form\">\n\n        <input type=\"hidden\" name=\"scrollPosition\">\n        <input type=\"hidden\" name=\"submitted\" id=\"submitted\" value=\"true\" />\n        <input type=\"text\" name=\"_gotcha\" style=\"display:none\" />\n        <input type=\"hidden\" name=\"_subject\" value=\"[FreshBlends] Message from website\" />\n      \n        <div class=\"col-lg-4 col-sm-4 zerif-rtl-contact-name\" data-scrollreveal=\"enter left after 0s over 1s\">\n          <label for=\"myname\" class=\"screen-reader-text\">Name</label>\n          <input required=\"required\" type=\"text\" name=\"name\" id=\"myname\" placeholder=\"Name\" class=\"form-control input-box\" value=\"\">\n        </div>\n\n        <div class=\"col-lg-4 col-sm-4 zerif-rtl-contact-email\" data-scrollreveal=\"enter left after 0s over 1s\">\n          <label for=\"myemail\" class=\"screen-reader-text\">Email</label>\n          <input required=\"required\" type=\"email\" name=\"_replyto\" id=\"myemail\" placeholder=\"Email\" class=\"form-control input-box\" value=\"\">\n        </div>\n\n        <div class=\"col-lg-4 col-sm-4 zerif-rtl-contact-subject\" data-scrollreveal=\"enter left after 0s over 1s\">\n          <label for=\"mysubject\" class=\"screen-reader-text\">Country</label>\n          <input required=\"required\" type=\"text\" name=\"country\" id=\"mycountry\" placeholder=\"Country\" class=\"form-control input-box\" value=\"\">\n        </div>\n\n        <div class=\"col-lg-12 col-sm-12\" data-scrollreveal=\"enter right after 0s over 1s\">\n          <label for=\"mymessage\" class=\"screen-reader-text\">Message</label>\n          <textarea name=\"message\" id=\"mymessage\" class=\"form-control textarea-box\" placeholder=\"Message\"></textarea>\n        </div>\n\n        <button class=\"btn btn-primary custom-button red-btn\" type=\"submit\" data-scrollreveal=\"enter left after 0s over 1s\">Send Message</button>\n        \n      </form>\n\n    </div>\n\n    <!-- / END CONTACT FORM-->\n    \n  </div> <!-- / END CONTAINER -->\n\n</section> <!-- / END CONTACT US SECTION-->\n      \n</div><!-- .site-content -->\n\n<footer id=\"footer\" role=\"contentinfo\">\n\n\n<div class=\"container\">\n\n  <div class=\"col-md-6 company-details\">\n    <p>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.endeva : stack1), depth0))
    + "</p>\n    <p>"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.endevaDescription : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n  </div>\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.index : depth0)) != null ? stack1.footer : stack1)) != null ? stack1.contacts : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n\n</div> <!-- / END CONTAINER -->\n\n</footer> <!-- / END FOOOTER  -->\n\n\n  </div><!-- mobile-bg-fix-whole-site -->\n</div><!-- .mobile-bg-fix-wrap -->\n";
},"useData":true});