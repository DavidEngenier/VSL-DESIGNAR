import React from 'react';

interface FacebookCommentsProps {
  url: string;
}

const FacebookComments: React.FC<FacebookCommentsProps> = ({ url }) => (
  <div className="facebook-comments">
    <iframe 
      src={url}
      style={{ maxWidth: '100%', width: '500px', height: '300px', border: 'none' }}
      sandbox="allow-same-origin allow-scripts"
    />
  </div>
);

const FacebookCommentsPage = () => (
  <div className="facebook-comments-page">
    <h1>Comentarios de Facebook</h1>
    <div className="comments-container">
      <FacebookComments url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Ffabii.pinzonmoguel%2Fposts%2Fpfbid0um7HXVfk8WfyAVc29fkrYFuNeDCckAD7wfqGKNbe28nD3eroNZxRaBXCdX7YPZZSl&show_text=true&width=500&preview=comet_preview" />
      <FacebookComments url="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fberthapatricia%2Fposts%2Fpfbid02tmEA3L3ELh6JtDx7zQwT1pquQ19bj2bZqXxphsMybzezpQ6ogkBekUVNpg7YBy6zl&show_text=true&width=500&preview=comet_preview"  />
    </div>
  </div>
);

export default FacebookCommentsPage;
