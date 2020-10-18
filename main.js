(function () {
  'use strict';

  var calendar;

  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      dateClick: function (info) {
        console.log('clicked on ' + info.dateStr);
      },
      locale: 'ja',
      editable: true,
      businessHours: {
        daysOfWeek: [ 1, 2, 3, 4, 5 ],
        startTime: '9:00',
        endTime: '18:00',
      },
      events: './events.json',
      eventClick: function (info) {
        console.group('eventClick');
        console.log('Event: ', info.event.title);
        console.log('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        console.log('View: ' + info.view.type);
        console.groupEnd();
      },
      eventChange: function (info) {
        console.group('eventChange');
        console.log('Event: ', info.event.title);
        console.log('Event.start: ', info.event.start);
        console.log('Event.end: ', info.event.end);
        console.log('RelatedEvents: ', info.relatedEvents);
        console.log('OldEvent: ', info.oldEvent);
        console.groupEnd();
        // 元に戻す
        // info.revert();
      },
      eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
    });
    calendar.render();
  });

  /**
   * イベント追加
   */
  document.getElementById('btn-add').addEventListener('click', function () {
    calendar.addEvent({
      title: 'New!!',
      start: '2020-10-01 20:00'
    });
  });

})();