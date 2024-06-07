import React from 'react';

interface FacebookCommentsProps {
  url: string;
}

const FacebookComments: React.FC<FacebookCommentsProps> = ({ url }) => (
  <div className="facebook-comments">
    <iframe 
      src={url}
      style={{ width: '100%', height: '600px', border: 'none' }} // Ajusta la altura según sea necesario
      sandbox="allow-same-origin allow-scripts"
    />
  </div>
);

const FacebookCommentsPage = () => (
  <div className="facebook-comments-page">
    <h1>Comentarios de Facebook</h1>
    <div className="comments-container">
      <div className="comments-column">
        <FacebookComments url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Ffabii.pinzonmoguel%2Fposts%2Fpfbid0um7HXVfk8WfyAVc29fkrYFuNeDCckAD7wfqGKNbe28nD3eroNZxRaBXCdX7YPZZSl&show_text=true&width=500&preview=comet_preview" />
      </div>
      <div className="comments-column">
        <FacebookComments url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fberthapatricia%2Fposts%2Fpfbid02tmEA3L3ELh6JtDx7zQwT1pquQ19bj2bZqXxphsMybzezpQ6ogkBekUVNpg7YBy6zl&show_text=true&width=500&preview=comet_preview"  />
      </div>
      <div className="comments-column">
        <FacebookComments url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fangelica.cruzornelas%2Fposts%2Fpfbid02sWvvdAQRm55pJukGjv3sL2kjh73Ccdft8tuEoSNfFv5rGKSPxp5DccGUMSGrPXypl&show_text=true&width=500&preview=comet_preview" />
      </div>
      <div className="comments-column">
        <FacebookComments url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhugowilfrido.oliveragarcia%2Fposts%2Fpfbid02sT7CnqMDRppAkx9VSNR4hF1YnU4g5QCNnNeyowkk18JLDUgKuAtUFq1qrUEqewVcl&show_text=true&width=500&preview=comet_preview"  />
      </div>
    </div>
  </div>
);

export default FacebookCommentsPage;
