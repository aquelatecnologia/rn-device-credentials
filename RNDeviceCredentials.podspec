require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name           = "RNDeviceCredentials"
  s.version        = version
  s.summary        = "Device Credentials."
  s.homepage       = "https://github.com/aquelatecnologia/rn-device-credentials"
  s.license        = "MIT"
  s.author         = { "Joel Arvidsson" => "joel@oblador.se" }
  s.ios.deployment_target = '12'
  s.source         = { :git => "https://github.com/aquelatecnologia/rn-device-credentials.git"}
  s.source_files   = 'RNDeviceCredentials/**/*.{h,m}'
  s.preserve_paths = "**/*.js"
  s.dependency 'React'

end
