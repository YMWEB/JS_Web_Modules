(function ($) {

    'use strict'

    window.getProvinceText = function (pv, city, county) {
        var p = province[pv] ? province[pv] : ''
        var c = p && p.c ? p.c[city] : ''
        var cc = c && c.c ? c.c[county] : ''
        return {
            province: p ? p.n : '',
            city: c && c.n ? c.n : c,
            county: cc ? cc : ''
        }
    }

    $.fn.province = function (settings) {
        var self = $(this)
        init()
        
        function init() {
            self.options = {
                province: null,
                city: null,
                // county: null,
                // nocounty: false
            }
            jQuery.extend(self.options, settings)
            self.province = $('<select class="province"><option value="-1">--请选择省份--</option></select>').appendTo(self)
            self.city = $('<select class="city"><option value="-1">--请选择--</option></select>').appendTo(self).hide()
            // self.contry = $('<select class="contry"><option value="-1">--请选择--</option></select>').appendTo(self).hide()
            initProvince()
            bindEvent()
            initDefault()
        }

        function initProvince() {
            for (var item in province) {
                $('<option value="' + item + '">' + province[item].n + '</option>').appendTo(self.province)
            }
        }

        function initDefault() {
            var province = self.options.province,
                city = self.options.city,
                county = self.options.county
            if (province) {
                $('option', self.province).each(function () {
                    if ($(this).val() == province) {
                        $(this).attr('selected', 'selected')
                    }
                })
                self.province.trigger('change')
                if (city) {
                    $('option', self.city).each(function () {
                        if ($(this).val() == city) {
                            $(this).attr('selected', 'selected')
                        }
                    })
                    self.city.trigger('change')
                    if (county && !self.options.nocounty) {
                        $('option', self.county).each(function () {
                            if ($(this).val() == county) {
                                $(this).attr('selected', 'selected')
                            }
                        })
                    }
                }
            }
        }

        function bindEvent() {
            self.province.change(function () {
                var pid = parseInt(self.province.val(), 10)
                if (pid && pid != -1) {
                    self.city.show()
                    self.city.html('')
                    var cities = province[pid].c
                    for (var item in cities) {
                        if (typeof cities[item] == 'string') {
                            $('<option value="' + item + '">' + cities[item] + '</option>').appendTo(self.city)
                        } else {
                            $('<option value="' + item + '">' + cities[item].n + '</option>').appendTo(self.city)
                        }
                    }
                    self.city.trigger('change')
                } else {
                    self.city.hide()
                    self.contry.hide()
                }
            })
            if (self.options.nocounty) {
                return
            }
            self.city.change(function () {
                var pid = parseInt(self.province.val(), 10),
                    cid = parseInt(self.city.val(), 10)
                self.contry.html('')
                if (pid && cid) {
                    self.contry.show()
                    var contries = province[pid].c[cid]
                    if (typeof contries != 'string') {
                        self.contry.show()
                        for (var item in contries.c) {
                            if (typeof contries.c[item] == 'string') {
                                $('<option value="' + item + '">' + contries.c[item] + '</option>').appendTo(self.contry)
                            }
                        }
                    } else {
                        self.contry.hide()
                    }
                } else {
                    self.contry.hide()
                }
            })
        }

        return {
            value: function () {
                var pele = $('option:selected', self.province),
                    cityele = $('option:selected', self.city),
                    countyele = $('option:selected', self.contry)
                return {
                    province: {code: pele.val(), value: pele.text()},
                    city: {code: cityele.val(), value: cityele.text()},
                    county: {code: countyele.val(), value: countyele.text()}
                }
            }
        }
    }
})(jQuery)