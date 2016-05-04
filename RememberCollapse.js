/*
  this script uses cookies to enable panels with rememberCollapse class name keep their expended/collapsed positions while navigating.
*/

<a href="#" class="btn btn-success" data-toggle="collapse" data-target="#divCollapse">Show/Hide</a>
<div id="divCollapse" class="rememberCollapse">
  Remember Collapse panel
</div>

/* default jQuery  */
<script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
/* jQuery cookie script */
<script src="https://github.com/carhartl/jquery-cookie/blob/master/src/jquery.cookie.js"></script>

<script lang="js">
			  $(document).ready(function () {
					$(".rememberCollapse").on("shown.bs.collapse", function () { $.cookie("expPan_"+this.id,1) } );
					$(".rememberCollapse").on("hidden.bs.collapse", function () { $.removeCookie("expPan_"+this.id) } );
					$(".rememberCollapse").each( function() { $(this).removeClass("in"); if( $.cookie("expPan_"+this.id) ) $(this).addClass("in"); } );
				});
<script>
