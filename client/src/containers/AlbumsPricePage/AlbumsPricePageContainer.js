import React, { Component } from 'react';
import { PostItem,DetailedExpansionPanel } from '../../components/index';

const posts = [
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    }, {
        id: 2,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<html><head></head><body><h2>AAAA</h2><p><span style="color: #ff6600;">gsagasa</span></p><div><em><span style="color: #ff6600;">gsagsagsagsaga</span></em></div><div><span style="color: #333333;"><em>gsagsa</em></span></div><div><span style="color: #333333;"><em>&nbsp;</em></span></div><div><strong><span style="color: #333333;">gsagasgsa</span></strong></div><div style="text-align: center;"><strong><span style="color: #333333;">&nbsp;</span></strong></div><div style="text-align: center;"><strong><span style="color: #333333;">gasgsaga</span></strong></div><div style="text-align: center;">&nbsp;</div><ol><li style="text-align: center;"><strong><span style="color: #333333;">asgagsa</span></strong></li><li style="text-align: center;"><strong><span style="color: #333333;">gsaga</span></strong></li><li style="text-align: center;"><strong><span style="color: #333333;">gsagsa</span></strong></li><li style="text-align: center;"><a title="afsga" href="http://localhost:3001/bang-gia/albums"><strong><span style="color: #333333;">gsagsagas</span></strong></a></li></ol></body></html>',
        price: '15.000.000',
    }, {
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },
    {
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },{
        id: 3,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Phim trường Phương Anh',
        ekip: 'SKT',
        content: '<ul><strong>Trang Phục:</strong><li>CD: 01 Soiree (khách tự chọn)</li><li>CR: 01 veston (khách tự chọn)</li><li>Hoa và phụ kiện: kèm theo phù hợp trang phục</li></ul><ul><strong>Nhận ngay:</strong><li>01 hình cổng ép gỗ 60x90</li><li>05 hình 13x18&nbsp; đẹp bỏ vào album</li><li>Chụp khoảng 30 file (chép hết file cho khách)</li><li>Tặng voucher giảm 10 % tất cả dịch vụ cho lần sau ghé lại</li></ul><ul><strong>Lưu ý</strong><li>Thêm 1 tấm hình cổng : giá&nbsp; 700.000đ</li><li>Thêm khung: giá&nbsp; 200.000đ</li></ul>',
        price: '15.000.000',
    },

];


const renderPosts = (posts) => {
    var result = null;
    if (posts.length > 0) {
        result = posts.map((post, index) => {
            return (
                <DetailedExpansionPanel
                    key = {index}
                    label ={post.name}
                    itemValue ={<PostItem key={index} post={post} />
                }
                />
            );
        });
    }
    return result;
}

class AlbumsPricePageContainer extends Component {

    render() {
        return (
            <div className="container albums_menu">
                <h2 className="page_title text-center" style={{ marginBottom :'1em' }}>Bảng giá Albums</h2>
                <div className="row" style={{ marginBottom :'5em' }} >
                    {renderPosts(posts)}
                </div>
                <nav className="gla_blog_pag">
                    <ul className="pagination">
                        <li><a href="#"><i className="ti ti-angle-left" /></a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><i className="ti ti-angle-right" /></a></li>
                    </ul>
                </nav>
              
            </div>
        );
    }
}

export default AlbumsPricePageContainer;
