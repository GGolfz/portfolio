---
title: มาทำ Commit Report ด้วย Flow กัน
description: ทุก ๆ คน คงใช้ Github ในการทำงานอยู่แล้ว แต่จะดีกว่าไหมถ้าเราไม่ต้องเช็ค commit เอง
blogimg: blog/blog_img_002.png
alt: Commit Report with Flow
tag: Automate
author: WISARUT KITTICHAROENPHONNGAM
readTime: 5 MINS READ
---
# มาทำ​ Commit Report ด้วย Flow กัน

ทุก ๆ คน คงใช้ Github ในการทำงานอยู่แล้ว แต่จะดีกว่าไหมถ้าเราไม่ต้องมาเช็ค commit เวลามีคน push ขึ้น repository ด้วยตัวเอง แต่มีคนมารายงานให้ฟัง

## สิ่งที่ต้องเตรียม

Microsoft Account ที่สามารถใช้ Teams และ Flow ได้
Account Github และ Repository ที่เราต้องการทำ commit report

## มาสร้าง Flow กันเถอะ 

เราสามารถเข้าใช้งาน Microsoft Flow ได้ผ่านทาง link นี้ https://flow.microsoft.com/ โดยเริ่มจากการสร้าง Flow ใหม่เปล่า ๆ ขึ้นมา ก่อนอื่นเราก็ต้องทำให้ Flow ของเราเนี้ย มันสามารถรับ Trigger จาก Github ได้ก่อนซึ่งในที่นี้ผมใช้เป็น When a HTTP request is received 
<p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-01.png" /></p>

ซึ่งเมื่อเราเชฟแล้วตัว Flow จะ generate HTTP Post Url มาให้เรา ขั้นตอนต่อไปให้เราเก็บ url นี้ไว้ก่อน แล้วสร้างตัว action ต่อไปของ Flow ซึ่งจะเป็นการนำ JSON จาก Github มา parse เพื่อแยกสิ่งที่เราต้องการออกมาซึ่งผมต้องการชื่อ repositories และ commit list <p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-02.png" /></p>

แล้วเราจะได้ตัว repositories ออกมาซึ่งสามารถเอามา parse json อีกรอบได้ <p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-03.png" /></p>

จากนั้นเราจะเอา commit ของเราที่ได้มาเป็น array มาจัดทำเป็น string ผมจึงเริ่มจาก initialize variable action ครับเพื่อประกาศ variable ไว้เก็บค่า string ของเรา <p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-04.png" /></p>

ต่อมาเรามาเริ่ม วน loop ใน array เพื่อเอาข้อมูลของแต่ละ commit กันดีกว่า เริ่มจาก การ parse json ของ commit ออกมาเป็นข้อมูลต่าง ๆ <p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-05.png" /></p>

จากนั้นก็ parse json ของ author เพื่อเอา username ของผู้ที่ commit ออกมา และเก็บลงในตัวแปร Commit List ที่เราประกาศไว้ตอนต้น <p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-06.png" /></p> 

สุดท้ายแล้วก็ให้มันโพสลง Microsoft Team โดยเลือก action post a message (V3) และกรอก Team, Channel และ Message ตามภาพเลย
<p style="text-align:center;margin:2% 0%"><img style="width:50%" src="/portfolio/blog/commit-img-06.png" /></p>

## Integrated with github

เอาหละ หลังจากเราสร้าง flow เสร็จแล้วเราก็เอามันไปเชื่อมต่อกับ github ของเรากัน โดยเข้าไปที่ github repository ที่เราต้องการ เลือก setting และ webhooks จากนั้นกด Add webhook จากนั้นนำ HTTP Post Url ที่ flow ให้เรามาในขั้นตอนแรกมาใส่ เลือก content type เป็น application/json และเลือก event ที่ต้องการซึ่งในที่นี้ผมต้องการแค่ push event จากนั้นกด add webhook แล้วไปลอง commit กันเลยยยย

## Schema for parse JSON

<script src="https://gist.github.com/GGolfz/6c970745fa654a46c0f811ca4fb2490a.js"></script>

<script src="https://gist.github.com/GGolfz/1aa2f5e51ea211f2d47f64aacee3f75c.js"></script>

<script src="https://gist.github.com/GGolfz/5cacc9f93ffd3864eacb3135527d5477.js"></script>

<script src="https://gist.github.com/GGolfz/c28ae7dbe653c4faef372b252e9397ef.js"></script>