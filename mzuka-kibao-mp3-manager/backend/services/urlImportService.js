class UrlImportService {
  constructor(){
    this.supportedSources=[
      'youtube',
      'soundcloud',
      'audiomack',
      'boomplay',
      'mixcloud',
      'direct'
    ];
  }

  detectSource(url){
    if(!url) return 'unknown';
    if(url.includes('youtube')) return 'youtube';
    if(url.includes('soundcloud')) return 'soundcloud';
    if(url.includes('audiomack')) return 'audiomack';
    if(url.includes('boomplay')) return 'boomplay';
    if(url.includes('mixcloud')) return 'mixcloud';
    return 'direct';
  }

  prepareImport(url){
    return {
      url,
      source:this.detectSource(url),
      status:'queued'
    };
  }
}

module.exports = new UrlImportService();
