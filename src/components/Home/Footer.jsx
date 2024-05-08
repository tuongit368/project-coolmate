import React from 'react'
import "../../styles/home/footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-container-text'>
            <div className='footer-container-text-left'>
                <h1>COOLMATE lắng nghe bạn!</h1>
                <p>Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</p>
            </div>
            <div className='footer-container-text-right'>
                <h6>Hotline</h6>
                <h4>1900.272737 - 028.7777.2737 <br /> (8:30 - 22:00) </h4>
                <h6 className='footer-container-text-right-email'>Email</h6>
                <h4>Cool@coolmate.me</h4>
            </div>
        </div>

        <hr />

        <div className='footer-container-text-detais'>
            <p>Coolmate là một thương hiệu thời trang mang đến cho bạn những bộ trang phục thời thượng và độc đáo. Với Coolmate, bạn có thể tìm thấy các sản phẩm thời trang được thiết kế sáng tạo và phong cách, từ trang phục hàng ngày đến những trang phục đặc biệt cho các dịp đặc biệt. Coolmate tự hào là nơi tổng hợp những xu hướng thời trang mới nhất và mang đến cho bạn sự lựa chọn đa dạng. Bất kể bạn đang tìm kiếm trang phục dạo phố thật thoải mái hay bộ đồ đi tiệc lộng lẫy, Coolmate sẽ có những lựa chọn phù hợp với phong cách của bạn. Hơn nữa, Coolmate cam kết về chất lượng sản phẩm và sự hài lòng của khách hàng. Bạn có thể yên tâm mua sắm trực tuyến trên nền tảng của Coolmate và được đảm bảo về sự đa dạng, phong cách và chất lượng của từng món đồ.</p>
            <h5>Hãy khám phá Coolmate ngay hôm nay để trải nghiệm không gian mua sắm thời trang độc đáo và đẳng cấp!</h5>
        </div>
    </div>
  )
}

export default Footer