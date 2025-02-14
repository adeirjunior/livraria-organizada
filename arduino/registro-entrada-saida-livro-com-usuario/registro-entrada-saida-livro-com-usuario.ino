#include <Wire.h>
#include <PN532_I2C.h>
#include <PN532.h>
#include <NfcAdapter.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);

void setup() {
  Serial.begin(115200);
  Serial.println("Arduino pronto para leitura NFC...");
  nfc.begin();
}

void loop() {
  if (nfc.tagPresent()) {
    NfcTag tag = nfc.read();
    
    Serial.print("UID:");
    Serial.println(tag.getUidString());
    
    delay(1000);
  }
}
