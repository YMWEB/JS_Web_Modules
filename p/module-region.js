require.config({
    baseUrl: '../../scripts',
    paths: {
        jquery: 'lib/jquery-1.12.0.min'
    }
})
define(["address_chn","jquery"], function (address_chn) {
    /* @Region
   ***
   */
    var Region = function (regionList) {
        this.regionList = regionList;
        this.pCode = '';
        this.cCode = '';
        this.provinceName = '';
        this.cityName = '';
        this.pList = [];
        this.cList = [];
        this.shippingfee = {required:true,value:""};
    }
    Region.prototype.init = function () {
        for (var i in this.regionList) {
            this.pList.push({
                code: i,
                name: this.regionList[i].n
            });
        }

    }
    Region.prototype.clearList = function () {
        this.cList = [];
    }
    Region.prototype.getName = function (code) {

    }
    Region.prototype.provinceChange = function (pCode) {
        this.cList = [];
        var pLine = this.regionList[pCode];
        this.provinceName = pLine.n || '';
        this.pCode = pCode;
        if (pLine.c) {
            for (var i in pLine.c) {
                var cCode = i;
                var cityName = pLine.c[i].n || '';
                this.cList.push({
                    code: cCode,
                    name: cityName
                });
            }
        }
        this.cCode = this.cList[0].code;
        this.cName = this.cList[0].name;
        if (this.shippingfee.required) {
            this.shippingfee.value = this.shippingFee(this.pCode);
        }
        
    }
    Region.prototype.cityChange = function (cCode) {
        this.cCode = cCode;
        for (var i in this.cList) {
            if (this.cList[i].code === cCode) {
                this.cityName = this.cList[i].name;
                break;
            }
        }
    }
    Region.prototype.validate = function () {
        if (this.pCode == '' || this.cCode == '') {
            return false;
        }
    }
    Region.prototype.shippingFee = function (pCode) {
        //ajax call;
        $.ajax({
            url: "/api/v1/GetShippingFee",
            dataType: 'script',
            data: {
                "__RequestVerificationToken": $("input[name=__RequestVerificationToken]").val(),
                "type":"",
                "from":"",
                "to":pCode,
                "weight":"0"
            },
        }).done(function (data) {
            console.log(data);
            return data;
        }).fail(function () {
            return null;
        })
    }
    /* address jquery plugin */
    $.fn.address = function (options) {

        return this.each(function () {
        })
    }
     

    return {
        _region: Region
    }
})