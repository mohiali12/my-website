<?php
// Force download of the resume PDF, optimized for mobile browsers

// Default to the main resume file if no parameter is provided
$fileParam = isset($_GET['file']) ? $_GET['file'] : 'Mohsin-resume-29.pdf';
$filename = basename($fileParam); // sanitize

$filepath = __DIR__ . DIRECTORY_SEPARATOR . $filename;

if (!is_file($filepath) || !file_exists($filepath)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'File not found.';
    exit;
}

// Send headers to force download
$filesize = filesize($filepath);
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . $filesize);
header('Cache-Control: private, must-revalidate');
header('Pragma: public');
header('X-Content-Type-Options: nosniff');

// Clean any output buffering that might corrupt the file
if (ob_get_level()) {
    ob_end_clean();
}

$fp = fopen($filepath, 'rb');
if ($fp) {
    fpassthru($fp);
    fclose($fp);
}
exit;
?>