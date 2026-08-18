# DJ Bunduki Audio Pipeline

## Objective

Provide a professional DJ streaming workflow while preserving the existing audio server.

Existing audio storage remains:

`https://mix.djbunduki.co.ke/uploads`

## Upload Flow

Source formats:

- MP3
- WAV
- AAC
- FLAC
- M4A

Processing:

1. Upload audio file
2. Validate file type and size
3. Convert master audio to MP3
4. Generate waveform data
5. Store metadata
6. Publish streaming version

## Streaming

The frontend streams published MP3 files without migrating existing audio assets.

## Analytics

Track:

- Plays
- Downloads
- Shares
- Listening duration

## Future Processing Stack

Recommended:

- FFmpeg for conversion
- WaveSurfer.js for visualization
- Background workers for processing
