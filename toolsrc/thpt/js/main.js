
    $(document).ready(function() {
        if (window.location.hostname == lh || window.location.hostname == wt) {
        $("#wt-tinhxuoi").submit(function(p) {
            var q = document.getElementById("diemtoan").value;
            var r = document.getElementById("diemvan").value;
            var t = document.getElementById("diemanh").value;
            var v = document.getElementById("diemtohop1").value;
            var x = document.getElementById("diemtohop2").value;
            var A = document.getElementById("diemtohop3").value;
            var C = document.getElementById("diemtb").value;
            var E = document.getElementById("diemkk").value;
            var s = document.getElementById("diemut").value;
            if (q <= 1 || r <= 1 || t <= 1 || v <= 1 || x <= 1 || A <= 1) {
                document.getElementById("tinhxuoi").innerHTML = "<b class='text-danger'><i class='fas fa-times'></i> Bạn đã trượt tốt nghiệp do có 1 môn dưới hoặc bằng 1!</b>"
                document.getElementById("tinhxuoi2").innerHTML = ""
            } else {
                var u = (Number(v) + Number(x) + Number(A)) / 3;
                var w = (Number(q) + Number(r) + Number(t) + u + Number(E)) / 4;
                var y = w * 0.7 + Number(C) * 0.3 + Number(s);
                var B = y.toFixed(2);
                var D = 5 - B;
                var z = D.toFixed(2);
                document.getElementById("tinhxuoi").innerHTML = "Điểm xét tốt nghiệp của bạn là: " + B;
                if (B < 5) {
                    document.getElementById("tinhxuoi2").innerHTML = "<b class='text-danger'><i class='fas fa-times'></i> Bạn đã trượt tốt nghiệp!</b><br/>Bạn cần ít nhất " + z + " điểm nữa để đỗ tốt nghiệp"
                } else {
                    document.getElementById("tinhxuoi2").innerHTML = "<b class='text-success'><i class='fas fa-check'></i> Bạn đã đỗ tốt nghiệp!</b>"
                }
            }
            p.preventDefault();
            $("#tinhxuoi0").modal("show")
        });
        $("#wt-tinhnguoc").submit(function(k) {
            var m = document.getElementById("diemtbn").value;
            var n = document.getElementById("diemkkn").value;
            var o = document.getElementById("diemutn").value;
            var h = ((5 - Number(o) - Number(m) * 0.3) / 0.7) * 4 - Number(n);
            var i = h.toFixed(2);
            var j = i / 4;
            var l = j.toFixed(2);
            document.getElementById("tinhnguoc").innerHTML = "Điểm tổng 4 môn Toán + Văn + Anh + Trung bình bài thi tổ hợp là " + i + "<br/>Tức là mỗi môn phải trên 1 và trung bình một môn >= " + l + " để đỗ tốt nghiệp!";
            k.preventDefault();
            $("#tinhnguoc0").modal("show")
        });
        $("#wt-tinhxuoi-gdtx").submit(function(k) {
            var p = document.getElementById("diemtoangdtx").value;
            var q = document.getElementById("diemvangdtx").value;
            var s = document.getElementById("diemanhgdtx").value;
            var u = document.getElementById("diemtbgdtx").value;
            var l = document.getElementById("diemkkgdtx").value;
            var m = document.getElementById("diemutgdtx").value;
            if (p <= 1 || q <= 1 || s <= 1) {
                document.getElementById("tinhxuoigdtx").innerHTML = "<b class='text-danger'><i class='fas fa-times'></i> Bạn đã trượt tốt nghiệp do có 1 môn dưới hoặc bằng 1!</b>"
                document.getElementById("tinhxuoi2gdtx").innerHTML = ""
            } else {
                var n = ((Number(p) + Number(q) + Number(s)) / 3 + Number(l) / 4) * 0.7 + Number(u) * 0.3 + Number(m);
                var o = n.toFixed(2);
                var r = 5 - o;
                var t = r.toFixed(2);
                document.getElementById("tinhxuoigdtx").innerHTML = "Điểm xét tốt nghiệp của bạn là: " + o;
                if (o < 5) {
                    document.getElementById("tinhxuoi2gdtx").innerHTML = "<b class='text-danger'><i class='fas fa-times'></i> Bạn đã trượt tốt nghiệp!</b><br/>Bạn cần ít nhất " + t + " điểm nữa để đỗ tốt nghiệp"
                } else {
                    document.getElementById("tinhxuoi2gdtx").innerHTML = "<b class='text-success'><i class='fas fa-check'></i> Bạn đã đỗ tốt nghiệp!</b>"
                }
            }
            k.preventDefault();
            $("#tinhxuoi0gdtx").modal("show")
        });
        $("#wt-tinhnguoc-gdtx").submit(function(k) {
            var j = document.getElementById("diemtbngdtx").value;
            var l = document.getElementById("diemkkngdtx").value;
            var m = document.getElementById("diemutngdtx").value;
            var n = ((5 - Number(m) - Number(j) * 0.3) / 0.7 - Number(l) / 4) * 3;
            var o = n.toFixed(2);
            var h = o / 3;
            var i = h.toFixed(2);
            document.getElementById("tinhnguocgdtx").innerHTML = "Điểm tổng 3 bài thi là " + o + "<br/>Tức là mỗi bài thi phải trên 1 và trung bình một bài thi >= " + i + " để đỗ tốt nghiệp!";
            k.preventDefault();
            $("#tinhnguoc0gdtx").modal("show")
        })
    } });
